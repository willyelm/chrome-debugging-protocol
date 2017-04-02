import { EventEmitter }  from 'events'
import { ChromeDebuggingRequester } from '../chrome-debugging-requester'

export class DebuggerDomain extends EventEmitter {
  private domainName: string = 'Debugger'
  constructor (private requester: ChromeDebuggingRequester) {
    super()
  }
  // methods
  enable () {
    return this.requester.send(`${this.domainName}.enable`)
  }
  setBreakpointsActive (params) {
    return this.requester.send(`${this.domainName}.setBreakpointsActive`, params)
  }
  // events
  scriptParsed (cb: Function) {
    this.addListener('scriptParsed', cb)
  }
}
