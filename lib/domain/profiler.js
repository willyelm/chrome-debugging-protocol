"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chrome_debugging_domain_1 = require("../chrome-debugging-domain");
class ProfilerDomain extends chrome_debugging_domain_1.ChromeDebuggingDomain {
    // methods
    enable() {
        return this.send('enable');
    }
    disable() {
        return this.send('disable');
    }
    setSamplingInterval(params) {
        return this.send('setSamplingInterval', params);
    }
    start() {
        return this.send('start');
    }
    stop() {
        return this.send('stop');
    }
    // events
    consoleProfileStarted(cb) {
        return this.addListener('consoleProfileStarted', cb);
    }
    consoleProfileFinished(cb) {
        return this.addListener('consoleProfileFinished', cb);
    }
}
exports.ProfilerDomain = ProfilerDomain;
//# sourceMappingURL=profiler.js.map