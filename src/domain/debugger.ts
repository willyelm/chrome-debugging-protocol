import { ChromeDebuggingDomain } from '../chrome-debugging-domain'
import { ScriptId, RemoteObject } from './runtime'

export type BreakpointId = string
export type CallFrameId = string
export interface Location {
  scriptId: ScriptId,
  lineNumber: number,
  columnNumber?: number
}
export interface Scope {
  type: string,
  object: RemoteObject,
  name?: string,
  startLocation?: Location,
  endLocation?: Location
}
export interface DebuggerCallFrame {
  callFrameId: CallFrameId,
  functionName: string,
  functionLocation?: Location,
  location: Location
  scopeChain: Array<Scope>,
  this: RemoteObject,
  returnValue: RemoteObject
}

export class DebuggerDomain extends ChromeDebuggingDomain {
  // methods
  enable () {
    return this.send('enable')
  }
  disable () {
    return this.send('disable')
  }
  setBreakpointsActive (params: {
    active: boolean
  }) {
    return this.send('setBreakpointsActive', params)
  }
  setSkipAllPauses (params: {
    skip: boolean
  }) {
    return this.send('setSkipAllPauses', params)
  }
  setBreakpointByUrl (params: {
    lineNumber: number,
    url?: string,
    urlRegex?: string,
    columnNumber?: number,
    condition?: string
  }): Promise<{
    breakpointId: BreakpointId,
    locations: Array<Location>
  }> {
    return this.send('setBreakpointByUrl', params)
  }
  setBreakpoint (params: {
    location: string,
    condition?: string
  }): Promise<{
    breakpointId: BreakpointId,
    actualLocation: Location
  }> {
    return this.send('setBreakpoint', params)
  }
  removeBreakpoint (params: {
    breakpointId: string
  }) {
    return this.send('removeBreakpoint', params)
  }
  continueToLocation (params: {
    location: string
  }) {
    return this.send('continueToLocation', params)
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
  pause () {
    return this.send('pause')
  }
  resume () {
    return this.send('resume')
  }
  setScriptSource (params: {
    scriptId: string,
    scriptSource: string,
    dryRun?: boolean
  }) {
    return this.send('setScriptSource', params)
  }
  restartFrame (params: {
    callFrameId: string
  }) {
    return this.send('restartFrame', params)
  }
  getScriptSource (params: {
    scriptId: string
  }) {
    return this.send('getScriptSource', params)
  }
  setPauseOnExceptions (params: {
    state: string
  }) {
    return this.send('setPauseOnExceptions', params)
  }
  evaluateOnCallFrame (params: {
    callFrameId: string,
    expression: string,
    objectGroup?: string,
    includeCommandLineAPI?: boolean,
    silent?: boolean,
    returnByValue?: boolean,
    generatePreview?: boolean
  }) {
    return this.send('evaluateOnCallFrame', params)
  }
  setVariableValue (params: {
    scopeNumber: number,
    variableName: string,
    newValue: {
      value?: any,
      unserializableValue?: string,
      objectId?: string
    },
    callFrameId: string
  }) {
    return this.send('setVariableValue', params)
  }
  setAsyncCallStackDepth (params: {
    maxDepth: number
  }) {
    return this.send('setAsyncCallStackDepth', params)
  }
  setBlackboxPatterns (params: Object) {
    return this.send('setBlackboxPatterns', params)
  }
  // events
  scriptParsed (cb: Function) {
    return this.addListener('scriptParsed', cb)
  }
  scriptFailedToParse (cb: Function) {
    return this.addListener('scriptFailedToParse', cb)
  }
  breakpointResolved (cb: Function) {
    return this.addListener('breakpointResolved', cb)
  }
  paused (cb: Function) {
    return this.addListener('paused', cb)
  }
  resumed (cb: Function) {
    return this.addListener('resumed', cb)
  }

}
