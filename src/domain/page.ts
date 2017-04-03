import { ChromeDebuggingDomain } from '../chrome-debugging-domain'

export class PageDomain extends ChromeDebuggingDomain {
  // methods
  enable () {
    return this.send('enable')
  }
  disable () {
    return this.send('disable')
  }
  reload (params: {
    ignoreCache?: boolean,
    scriptToEvaluateOnLoad?: string
  }) {
    return this.send('reload', params)
  }
  navigate (params: {
    url: string
  }) {
    return this.send('navigate', params)
  }
  handleJavaScriptDialog (params: {
    accept: boolean,
    promptText?: string
  }) {
    return this.send('handleJavaScriptDialog', params)
  }
  configureOverlay (params: {
    suspended?: boolean,
    message?: string
  }) {
    return this.send('configureOverlay', params)
  }
  // events
  domContentEventFired (cb: Function) {
    return this.addListener('domContentEventFired', cb)
  }
  loadEventFired (cb: Function) {
    return this.addListener('loadEventFired', cb)
  }
  frameAttached (cb: Function) {
    return this.addListener('frameAttached', cb)
  }
  frameNavigated (cb: Function) {
    return this.addListener('frameNavigated', cb)
  }
  frameDetached (cb: Function) {
    return this.addListener('frameDetached', cb)
  }
  javascriptDialogOpening (cb: Function) {
    return this.addListener('javascriptDialogOpening', cb)
  }
  javascriptDialogClosed (cb: Function) {
    return this.addListener('javascriptDialogClosed', cb)
  }
  interstitialShown (cb: Function) {
    return this.addListener('interstitialShown', cb)
  }
  interstitialHidden (cb: Function) {
    return this.addListener('interstitialHidden', cb)
  }
  navigationRequested (cb: Function) {
    return this.addListener('navigationRequested', cb)
  }
}
