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
  private connected: boolean
  constructor (private socketUrl: string,
    options?: ChromeDebuggingProtocolOptions) {
    this.event = new EventEmitter()
    if (options) {
      this.log = Boolean(options.log)
    }
  }
  onDidConnect (cb) {
    return this.event.addListener('didConnect', cb)
  }
  onDidClose (cb) {
    return this.event.addListener('didClose', cb)
  }
  onDidReceiveError (cb) {
    return this.event.addListener('didReceiveError', cb)
  }
  isConnected () {
    return this.connected
  }
  getDomains (): Domains {
    if (this.isConnected()) {
      return this.requester.getDomains()
    } else {
      throw new Error('Unable to get domains before connection')
    }
  }
  disconnect () {
    this.socket.close()
    this.connected = false
    this.event.emit('didClose')
  }
  connect (): Promise<boolean> {
    this.connected = false
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
        this.event.emit('didConnect')
        this.connected = true
        resolve(this.connected)
      })
      this.socket.on('close', () => this.event.emit('didClose'))
    })
  }
}
