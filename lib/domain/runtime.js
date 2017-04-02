"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chrome_debugging_domain_1 = require("../chrome-debugging-domain");
class RuntimeDomain extends chrome_debugging_domain_1.ChromeDebuggingDomain {
    // methods
    evaluate(params) {
        return this.send('evaluate', params);
    }
    awaitPromise(params) {
        return this.send('awaitPromise', params);
    }
    callFunctionOn(params) {
        return this.send('callFunctionOn', params);
    }
    getProperties(params) {
        return this.send('getProperties', params);
    }
    releaseObject(params) {
        return this.send('releaseObject', params);
    }
    releaseObjectGroup(params) {
        return this.send('releaseObjectGroup', params);
    }
    runIfWaitingForDebugger() {
        return this.send('runIfWaitingForDebugger');
    }
    enable() {
        return this.send('enable');
    }
    disable() {
        return this.send('disable');
    }
    discardConsoleEntries() {
        return this.send('discardConsoleEntries');
    }
    compileScript(params) {
        return this.send('compileScript', params);
    }
    runScript(params) {
        return this.send('runScript', params);
    }
    // events
    executionContextCreated(cb) {
        return this.addListener('executionContextCreated', cb);
    }
    executionContextDestroyed(cb) {
        return this.addListener('executionContextDestroyed', cb);
    }
    executionContextsCleared(cb) {
        return this.addListener('executionContextsCleared', cb);
    }
    exceptionThrown(cb) {
        return this.addListener('exceptionThrown', cb);
    }
    exceptionRevoked(cb) {
        return this.addListener('exceptionRevoked', cb);
    }
    consoleAPICalled(cb) {
        return this.addListener('consoleAPICalled', cb);
    }
    inspectRequested(cb) {
        return this.addListener('inspectRequested', cb);
    }
}
exports.RuntimeDomain = RuntimeDomain;
//# sourceMappingURL=runtime.js.map