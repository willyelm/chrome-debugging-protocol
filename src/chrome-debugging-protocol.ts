import { EventEmitter }  from 'events'
import { Domains } from './domain/index'
import { ChromeDebuggingRequester } from './chrome-debugging-requester'
import * as WebSocket from 'ws'

export class ChromeDebuggingProtocol {
  private socket: WebSocket
  private event: EventEmitter
  private requester: ChromeDebuggingRequester
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
        let domains = this.requester.getDomains()
        resolve(domains)
      })
      this.socket.on('close', () => this.event.emit('didClose'))
    })
  }
}
