import { ChromeDebuggingDomain } from '../chrome-debugging-domain'

export class RuntimeDomain extends ChromeDebuggingDomain {
  // methods
  evaluate (params: {
    expression: string,
    objectGroup?: string,
    includeCommandLineAPI?: boolean,
    silent?: boolean,
    contextId?: boolean,
    returnByValue?: boolean,
    generatePreview?: boolean,
    userGesture?: boolean,
    awaitPromise?: boolean
  }) {
    return this.send('evaluate', params)
  }
  awaitPromise (params: {
    promiseObjectId: string,
    returnByValue?: boolean,
    generatePreview?: boolean
  }) {
    return this.send('awaitPromise', params)
  }
  callFunctionOn (params: {
    objectId: string,
    functionDeclaration: string,
    arguments?: Array<{
      value?: string,
      unserializableValue?: string,
      objectId?: string
    }>,
    silent?: boolean,
    returnByValue?: boolean,
    generatePreview?: boolean,
    userGesture?: boolean,
    awaitPromise?: boolean
  }) {
    return this.send('callFunctionOn', params)
  }
  getProperties (params: {
    objectId: string,
    ownProperties?: boolean,
    accessorPropertiesOnly?: boolean,
    generatePreview?: boolean
  }) {
    return this.send('getProperties', params)
  }
  releaseObject (params: {
    objectId: string
  }) {
    return this.send('releaseObject', params)
  }
  releaseObjectGroup (params: {
    objectGroup: string
  }) {
    return this.send('releaseObjectGroup', params)
  }
  runIfWaitingForDebugger () {
    return this.send('runIfWaitingForDebugger')
  }
  enable () {
    return this.send('enable')
  }
  disable () {
    return this.send('disable')
  }
  discardConsoleEntries () {
    return this.send('discardConsoleEntries')
  }
  compileScript (params: {
    expression: string,
    sourceURL: string,
    persistScript: boolean,
    executionContextId?: number
  }) {
    return this.send('compileScript', params)
  }
  runScript (params: {
    scriptId: string,
    executionContextId?: string,
    objectGroup?: string,
    silent?: boolean,
    includeCommandLineAPI?: boolean,
    returnByValue?: boolean,
    generatePreview?: boolean,
    awaitPromise?: boolean
  }) {
    return this.send('runScript', params)
  }
  // events
  executionContextCreated (cb: Function) {
    return this.addListener('executionContextCreated', cb)
  }
  executionContextDestroyed (cb: Function) {
    return this.addListener('executionContextDestroyed', cb)
  }
  executionContextsCleared (cb: Function) {
    return this.addListener('executionContextsCleared', cb)
  }
  exceptionThrown (cb: Function) {
    return this.addListener('exceptionThrown', cb)
  }
  exceptionRevoked (cb: Function) {
    return this.addListener('exceptionRevoked', cb)
  }
  consoleAPICalled (cb: Function) {
    return this.addListener('consoleAPICalled', cb)
  }
  inspectRequested (cb: Function) {
    return this.addListener('inspectRequested', cb)
  }
}
