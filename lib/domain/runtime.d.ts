import { ChromeDebuggingDomain } from '../chrome-debugging-domain';
export declare class RuntimeDomain extends ChromeDebuggingDomain {
    enable(): Promise<{}>;
    runIfWaitingForDebugger(): Promise<{}>;
    getProperties(options: any): Promise<{}>;
    exceptionThrown(cb: Function): this;
    consoleAPICalled(cb: Function): this;
}
