"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chrome_debugging_domain_1 = require("../chrome-debugging-domain");
class PageDomain extends chrome_debugging_domain_1.ChromeDebuggingDomain {
    // methods
    enable() {
        return this.send('enable');
    }
    disable() {
        return this.send('disable');
    }
    reload(params) {
        return this.send('reload', params);
    }
    navigate(params) {
        return this.send('navigate', params);
    }
    handleJavaScriptDialog(params) {
        return this.send('handleJavaScriptDialog', params);
    }
    setOverlayMessage(params) {
        return this.send('setOverlayMessage', params);
    }
    // events
    domContentEventFired(cb) {
        return this.addListener('domContentEventFired', cb);
    }
    loadEventFired(cb) {
        return this.addListener('loadEventFired', cb);
    }
    frameAttached(cb) {
        return this.addListener('frameAttached', cb);
    }
    frameNavigated(cb) {
        return this.addListener('frameNavigated', cb);
    }
    frameDetached(cb) {
        return this.addListener('frameDetached', cb);
    }
    javascriptDialogOpening(cb) {
        return this.addListener('javascriptDialogOpening', cb);
    }
    javascriptDialogClosed(cb) {
        return this.addListener('javascriptDialogClosed', cb);
    }
    interstitialShown(cb) {
        return this.addListener('interstitialShown', cb);
    }
    interstitialHidden(cb) {
        return this.addListener('interstitialHidden', cb);
    }
    navigationRequested(cb) {
        return this.addListener('navigationRequested', cb);
    }
}
exports.PageDomain = PageDomain;
//# sourceMappingURL=page.js.map