"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chrome_debugging_domain_1 = require("../chrome-debugging-domain");
class ConsoleDomain extends chrome_debugging_domain_1.ChromeDebuggingDomain {
    // methods
    enable() {
        return this.send('enable');
    }
    disable() {
        return this.send('disable');
    }
    clearMessages() {
        return this.send('clearMessages');
    }
    // events
    messageAdded(cb) {
        return this.addListener('messageAdded', cb);
    }
}
exports.ConsoleDomain = ConsoleDomain;
//# sourceMappingURL=console.js.map