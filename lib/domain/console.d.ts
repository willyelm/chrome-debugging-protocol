import { ChromeDebuggingDomain } from '../chrome-debugging-domain';
export interface ConsoleMessage {
    source: string;
    level: string;
    text: string;
    url?: string;
    line?: number;
    column?: number;
}
export declare class ConsoleDomain extends ChromeDebuggingDomain {
    enable(): Promise<any>;
    disable(): Promise<any>;
    clearMessages(): Promise<any>;
    messageAdded(cb: Function): this;
}
