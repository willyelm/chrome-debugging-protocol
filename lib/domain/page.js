"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chrome_debugging_domain_1 = require("../chrome-debugging-domain");
class PageDomain extends chrome_debugging_domain_1.ChromeDebuggingDomain {
    // methods
    navigate(params) {
        return this.send('navigate', params);
    }
}
exports.PageDomain = PageDomain;
//# sourceMappingURL=page.js.map