import { ChromeDebuggingDomain } from '../chrome-debugging-domain'

export class ProfilerDomain extends ChromeDebuggingDomain {
  // methods
  enable () {
    return this.send('enable')
  }
  disable () {
    return this.send('disable')
  }
  setSamplingInterval (params: {
    interval: number
  }) {
    return this.send('setSamplingInterval', params)
  }
  start () {
    return this.send('start')
  }
  stop () {
    return this.send('stop')
  }
  // events
  consoleProfileStarted (cb: Function) {
    return this.addListener('consoleProfileStarted', cb)
  }
  consoleProfileFinished (cb: Function) {
    return this.addListener('consoleProfileFinished', cb)
  }
}
