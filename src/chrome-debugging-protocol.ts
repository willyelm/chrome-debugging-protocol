import { EventEmitter }  from 'events'
import { Domains } from './domain/index'
import { ChromeDebuggingRequester } from './chrome-debugging-requester'
import * as WebSocket from 'ws'

export interface ChromeDebuggingProtocolOptions {
  log?: boolean
}

export class ChromeDebuggingProtocol {
  private socket: WebSocket
  private event: EventEmitter
  private requester: ChromeDebuggingRequester
  private log: boolean
  constructor (private socketUrl: string,
    options?: ChromeDebuggingProtocolOptions) {
    this.event = new EventEmitter()
    if (options) {
      this.log = Boolean(options.log)
    }
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
  connect (): Promise<Domains> {
    return new Promise((resolve, reject) => {
      this.socket = new WebSocket(this.socketUrl)
      this.socket.on('error', reject)
      this.socket.on('open', () => {
        this.socket.removeListener('error', reject)
        this.socket.on('error', (error) => {
          this.event.emit('didReceiveError', error)
        })
        this.requester = new ChromeDebuggingRequester(this.socket)
        if (this.log) {
          this.requester.enableLogging()
        }
        let domains = this.requester.getDomains()
        resolve(domains)
      })
      this.socket.on('close', () => this.event.emit('didClose'))
    })
  }
}
