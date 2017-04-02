"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chrome_debugging_domain_1 = require("../chrome-debugging-domain");
class ProfilerDomain extends chrome_debugging_domain_1.ChromeDebuggingDomain {
    // methods
    enable() {
        return this.send('enable');
    }
    setSamplingInterval(params) {
        return this.send('setSamplingInterval', params);
    }
}
exports.ProfilerDomain = ProfilerDomain;
//# sourceMappingURL=profiler.js.map