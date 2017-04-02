import { ChromeDebuggingDomain } from '../chrome-debugging-domain'

export class ConsoleDomain extends ChromeDebuggingDomain {
  // methods
  enable () {
    return this.send('enable')
  }
  // events
  messageAdded (cb: Function) {
    return this.addListener('messageAdded', cb)
  }
}
