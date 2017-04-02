"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chrome_debugging_domain_1 = require("../chrome-debugging-domain");
class RuntimeDomain extends chrome_debugging_domain_1.ChromeDebuggingDomain {
    // methods
    enable() {
        return this.send('enable');
    }
    runIfWaitingForDebugger() {
        return this.send('runIfWaitingForDebugger');
    }
    getProperties(options) {
        return this.send('getProperties', options);
    }
    // events
    exceptionThrown(cb) {
        return this.addListener('exceptionThrown', cb);
    }
    consoleAPICalled(cb) {
        return this.addListener('consoleAPICalled', cb);
    }
}
exports.RuntimeDomain = RuntimeDomain;
//# sourceMappingURL=runtime.js.map