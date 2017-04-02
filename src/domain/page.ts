import { ChromeDebuggingDomain } from '../chrome-debugging-domain'

export class PageDomain extends ChromeDebuggingDomain {
  // methods
  navigate (params: Object) {
    return this.send('navigate', params)
  }
}
