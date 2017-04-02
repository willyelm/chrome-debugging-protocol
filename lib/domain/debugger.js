"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chrome_debugging_domain_1 = require("../chrome-debugging-domain");
class DebuggerDomain extends chrome_debugging_domain_1.ChromeDebuggingDomain {
    // methods
    enable() {
        return this.send('enable');
    }
    resume() {
        return this.send('resume');
    }
    pause() {
        return this.send('pause');
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
    setPauseOnExceptions(params) {
        return this.send('setPauseOnExceptions', params);
    }
    setAsyncCallStackDepth(params) {
        return this.send('setAsyncCallStackDepth', params);
    }
    setBreakpointsActive(params) {
        return this.send('setBreakpointsActive', params);
    }
    setBreakpointByUrl(params) {
        return this.send('setBreakpointByUrl', params);
    }
    removeBreakpoint(params) {
        return this.send('removeBreakpoint', params);
    }
    setBlackboxPatterns(params) {
        return this.send('setBlackboxPatterns', params);
    }
    evaluateOnCallFrame(params) {
        return this.send('evaluateOnCallFrame', params);
    }
    // events
    paused(cb) {
        return this.addListener('paused', cb);
    }
    resumed(cb) {
        return this.addListener('resumed', cb);
    }
    scriptParsed(cb) {
        return this.addListener('scriptParsed', cb);
    }
}
exports.DebuggerDomain = DebuggerDomain;
//# sourceMappingURL=debugger.js.map