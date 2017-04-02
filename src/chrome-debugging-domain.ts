import { EventEmitter }  from 'events'
import { ChromeDebuggingRequester } from './chrome-debugging-requester'

export class ChromeDebuggingDomain extends EventEmitter {
  private domainName: string
  constructor (private requester: ChromeDebuggingRequester) {
    super()
    this.setDomainFromClass()
  }
  setDomainFromClass () {
    this.domainName = String(this.constructor.name).replace(/Domain$/, '')
  }
  send (method: string, params?: Object) {
    return this
      .requester
      .send(`${this.domainName}.${method}`, params || {})
  }
}
