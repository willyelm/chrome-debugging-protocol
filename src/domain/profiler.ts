import { ChromeDebuggingDomain } from '../chrome-debugging-domain'

export class ProfilerDomain extends ChromeDebuggingDomain {
  // methods
  enable () {
    return this.send('enable')
  }
  setSamplingInterval (params: Object) {
    return this.send('setSamplingInterval', params)
  }
  // // events
  // messageAdded (cb: Function) {
  //   return this.requester.send(`${this.domainName}.messageAdded`, cb)
  // }
}
