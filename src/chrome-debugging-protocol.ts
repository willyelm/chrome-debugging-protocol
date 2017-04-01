import { EventEmitter }  from 'events'
import { ConsoleDomain } from './domain/console'
import * as WebSocket from 'ws'

export interface ChromeDebuggingDomains {
  Console: ConsoleDomain
}

export interface ChromeDebuggingSubscription {
  resolve: Function,
  reject: Function
}

export type ChromeDebuggingSubscriptions = Array<ChromeDebuggingSubscription>

export class ChromeDebuggingProtocol {
  private socket: WebSocket
  private event: EventEmitter
  private nextRequestId: number = 0
  private subscriptions: ChromeDebuggingSubscriptions = []
  constructor (private socketUrl: string) {
    this.event = new EventEmitter()
  }
  didClose (cb) {
    this.event.addListener('didClose', cb)
  }
  didReceiveError (cb) {
    this.event.addListener('didReceiveError', cb)
  }
  disconnect () {
    this.socket.close()
    this.event.emit('didClose')
  }
  connect (): Promise<ChromeDebuggingDomains> {
    return new Promise((resolve, reject) => {
      this.socket = new WebSocket(this.socketUrl)
      this.socket.on('error', reject)
      this.socket.on('open', () => {
        this.socket.removeListener('error', reject)
        this.socket.on('error', (error) => {
          this.event.emit('didReceiveError', error)
        })
        let domains: ChromeDebuggingDomains = {
          Console: new ConsoleDomain()
        }
        resolve(domains)
      })
      this.socket.on('message', (message) => {
        let response = JSON.parse(message)
        this.handleResponse(response)
      })
      this.socket.on('close', () => this.event.emit('didClose'))
    })
  }
  handleResponse (response: any) {

  }
}
