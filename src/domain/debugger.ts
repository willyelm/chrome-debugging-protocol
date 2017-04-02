import { ChromeDebuggingDomain } from '../chrome-debugging-domain'

export class DebuggerDomain extends ChromeDebuggingDomain {
  // methods
  enable () {
    return this.send('enable')
  }
  resume () {
    return this.send('resume')
  }
  pause () {
    return this.send('pause')
  }
  stepOver () {
    return this.send('stepOver')
  }
  stepInto () {
    return this.send('stepInto')
  }
  stepOut () {
    return this.send('stepOut')
  }
  setPauseOnExceptions (params: Object) {
    return this.send('setPauseOnExceptions', params)
  }
  setAsyncCallStackDepth (params: Object) {
    return this.send('setAsyncCallStackDepth', params)
  }
  setBreakpointsActive (params: Object) {
    return this.send('setBreakpointsActive', params)
  }
  setBreakpointByUrl (params: Object) {
    return this.send('setBreakpointByUrl', params)
  }
  removeBreakpoint (params: Object) {
    return this.send('removeBreakpoint', params)
  }
  setBlackboxPatterns (params: Object) {
    return this.send('setBlackboxPatterns', params)
  }
  evaluateOnCallFrame (params: Object) {
    return this.send('evaluateOnCallFrame', params)
  }
  // events
  paused (cb: Function) {
    return this.addListener('paused', cb)
  }
  resumed (cb: Function) {
    return this.addListener('resumed', cb)
  }
  scriptParsed (cb: Function) {
    return this.addListener('scriptParsed', cb)
  }
}
