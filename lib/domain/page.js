"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
class PageDomain extends events_1.EventEmitter {
    constructor(requester) {
        super();
        this.requester = requester;
    }
    // methods
    navigate(params) {
        return this.requester.send('Page.navigate', params);
    }
}
exports.PageDomain = PageDomain;
//# sourceMappingURL=page.js.map