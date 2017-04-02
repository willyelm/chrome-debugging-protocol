import { ChromeDebuggingDomain } from '../chrome-debugging-domain';
export declare class ProfilerDomain extends ChromeDebuggingDomain {
    enable(): Promise<{}>;
    disable(): Promise<{}>;
    setSamplingInterval(params: {
        interval: number;
    }): Promise<{}>;
    start(): Promise<{}>;
    stop(): Promise<{}>;
    consoleProfileStarted(cb: Function): this;
    consoleProfileFinished(cb: Function): this;
}
