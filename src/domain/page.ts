import { EventEmitter }  from 'events'
import { ChromeDebuggingRequester } from '../chrome-debugging-requester'

export class PageDomain extends EventEmitter {
  constructor (private requester: ChromeDebuggingRequester) {
    super()
  }
  // methods
  navigate (params: Object) {
    return this.requester.send('Page.navigate', params)
  }
}
