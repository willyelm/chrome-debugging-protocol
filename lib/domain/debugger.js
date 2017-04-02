"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chrome_debugging_domain_1 = require("../chrome-debugging-domain");
class DebuggerDomain extends chrome_debugging_domain_1.ChromeDebuggingDomain {
    // methods
    enable() {
        return this.send('enable');
    }
    disable() {
        return this.send('disable');
    }
    setBreakpointsActive(params) {
        return this.send('setBreakpointsActive', params);
    }
    setSkipAllPauses(params) {
        return this.send('setSkipAllPauses', params);
    }
    setBreakpointByUrl(params) {
        return this.send('setBreakpointByUrl', params);
    }
    setBreakpoint(params) {
        return this.send('setBreakpoint', params);
    }
    removeBreakpoint(params) {
        return this.send('removeBreakpoint', params);
    }
    continueToLocation(params) {
        return this.send('continueToLocation', params);
    }
    stepOver() {
        return this.send('stepOver');
    }
    stepInto() {
        return this.send('stepInto');
    }
    stepOut() {
        return this.send('stepOut');
    }
    pause() {
        return this.send('pause');
    }
    resume() {
        return this.send('resume');
    }
    setScriptSource(params) {
        return this.send('setScriptSource', params);
    }
    restartFrame(params) {
        return this.send('restartFrame', params);
    }
    getScriptSource(params) {
        return this.send('getScriptSource', params);
    }
    setPauseOnExceptions(params) {
        return this.send('setPauseOnExceptions', params);
    }
    evaluateOnCallFrame(params) {
        return this.send('evaluateOnCallFrame', params);
    }
    setVariableValue(params) {
        return this.send('setVariableValue', params);
    }
    setAsyncCallStackDepth(params) {
        return this.send('setAsyncCallStackDepth', params);
    }
    setBlackboxPatterns(params) {
        return this.send('setBlackboxPatterns', params);
    }
    // events
    scriptParsed(cb) {
        return this.addListener('scriptParsed', cb);
    }
    scriptFailedToParse(cb) {
        return this.addListener('scriptFailedToParse', cb);
    }
    breakpointResolved(cb) {
        return this.addListener('breakpointResolved', cb);
    }
    paused(cb) {
        return this.addListener('paused', cb);
    }
    resumed(cb) {
        return this.addListener('resumed', cb);
    }
}
exports.DebuggerDomain = DebuggerDomain;
//# sourceMappingURL=debugger.js.map