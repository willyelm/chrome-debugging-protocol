import { EventEmitter }  from 'events'
import { ChromeDebuggingRequester } from '../chrome-debugging-requester'

export class ConsoleDomain extends EventEmitter {
  private domainName: string = 'Console'
  constructor (private requester: ChromeDebuggingRequester) {
    super()
  }
  // methods
  enable () {
    return this.requester.send(`${this.domainName}.enable`)
  }
  // events
  messageAdded (cb: Function) {
    return this.requester.send(`${this.domainName}.messageAdded`, cb)
  }
}
