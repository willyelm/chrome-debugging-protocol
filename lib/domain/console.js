"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class ConsoleDomain extends events_1.EventEmitter {
    constructor(requester) {
        super();
        this.requester = requester;
        this.domainName = 'Console';
    }
    // methods
    enable() {
        return this.requester.send(`${this.domainName}.enable`);
    }
    // events
    messageAdded(cb) {
        return this.requester.send(`${this.domainName}.messageAdded`, cb);
    }
}
exports.ConsoleDomain = ConsoleDomain;
//# sourceMappingURL=console.js.map