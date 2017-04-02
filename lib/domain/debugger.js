"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class DebuggerDomain extends events_1.EventEmitter {
    constructor(requester) {
        super();
        this.requester = requester;
        this.domainName = 'Debugger';
    }
    // methods
    enable() {
        return this.requester.send(`${this.domainName}.enable`);
    }
    setBreakpointsActive(params) {
        return this.requester.send(`${this.domainName}.setBreakpointsActive`, params);
    }
    // events
    scriptParsed(cb) {
        this.addListener('scriptParsed', cb);
    }
}
exports.DebuggerDomain = DebuggerDomain;
//# sourceMappingURL=debugger.js.map