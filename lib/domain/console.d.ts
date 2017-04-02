import { ChromeDebuggingDomain } from '../chrome-debugging-domain';
export declare class ConsoleDomain extends ChromeDebuggingDomain {
    enable(): Promise<{}>;
    messageAdded(cb: Function): this;
}
