import { ChromeDebuggingDomain } from '../chrome-debugging-domain'

export interface ConsoleMessage {
  source: string,
  level: string,
  text: string,
  url?: string,
  line?: number,
  column?: number
}

export class ConsoleDomain extends ChromeDebuggingDomain {
  // methods
  enable () {
    return this.send('enable')
  }
  disable () {
    return this.send('disable')
  }
  clearMessages () {
    return this.send('clearMessages')
  }
  // events
  messageAdded (cb: Function) {
    return this.addListener('messageAdded', cb)
  }
}
