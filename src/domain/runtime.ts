import { ChromeDebuggingDomain } from '../chrome-debugging-domain'

export class RuntimeDomain extends ChromeDebuggingDomain {
  // methods
  enable () {
    return this.send('enable')
  }
  runIfWaitingForDebugger () {
    return this.send('runIfWaitingForDebugger')
  }
  getProperties (options) {
    return this.send('getProperties', options)
  }
  // events
  exceptionThrown (cb: Function) {
    return this.addListener('exceptionThrown', cb)
  }
  consoleAPICalled (cb: Function) {
    return this.addListener('consoleAPICalled', cb)
  }
}
