"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class ChromeDebuggingDomain extends events_1.EventEmitter {
    constructor(requester) {
        super();
        this.requester = requester;
        this.setDomainFromClass();
    }
    setDomainFromClass() {
        this.domainName = String(this.constructor.name).replace(/Domain$/, '');
    }
    send(method, params) {
        return this
            .requester
            .send(`${this.domainName}.${method}`, params || {});
    }
}
exports.ChromeDebuggingDomain = ChromeDebuggingDomain;
//# sourceMappingURL=chrome-debugging-domain.js.map