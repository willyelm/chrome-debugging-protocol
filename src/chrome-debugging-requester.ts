import * as WebSocket from 'ws'
import {
  Domains,
  ConsoleDomain,
  PageDomain,
  DebuggerDomain,
  RuntimeDomain,
  ProfilerDomain
} from './domain/index'

export interface ChromeDebuggingSubscription {
  resolve: Function,
  reject: Function
}

export type ChromeDebuggingSubscriptions = Array<ChromeDebuggingSubscription>

export interface ChromeDebuggingRequest {
  id: number,
  method: string,
  params?: Object
}

export class ChromeDebuggingRequester {
  private nextRequestId: number = 0
  private subscriptions: ChromeDebuggingSubscriptions = []
  private domains: Domains
  private log: boolean = false
  constructor (private socket: WebSocket) {
    this.domains = {
      Console: new ConsoleDomain(this),
      Page: new PageDomain(this),
      Debugger: new DebuggerDomain(this),
      Runtime: new RuntimeDomain(this),
      Profiler: new ProfilerDomain(this)
    }
    socket.on('message', (message) => {
      let response = JSON.parse(message)
      this.responseHandler(response)
    })
  }
  enableLogging () {
    this.log = true
  }
  getDomains (): Domains {
    return this.domains
  }
  responseHandler (response: any) {
    if (Number(response.id) >= 0 && this.subscriptions[response.id]) {
      let subscription = this.subscriptions[response.id]
      if (response.result) {
        subscription.resolve(response.result)
      } else {
        subscription.reject(response.error)
      }
    } else if (response.error) {
      if (this.log) console.log('unhandled error', response)
    } else {
      let parse = String(response.method).split('.')
      let domainName = parse[0]
      let methodName = parse[1]
      let domain = this.domains[domainName]
      if (domain) {
        this.domains[domainName].emit(methodName, response.params as {
          testName?: string
        })
      } else {
        if (this.log) console.log('unhandled method', response)
      }
    }
  }
  send (method: string, params?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let options: ChromeDebuggingRequest = {
        id: this.nextRequestId,
        method: method
      }
      if (params) {
        options.params = params
      }
      this.subscriptions[options.id] = {
        resolve: resolve,
        reject: reject
      }
      let body = JSON.stringify(options)
      this.socket.send(body)
      if (this.log) console.log('sending', body)
      this.nextRequestId++
    })
  }
}
