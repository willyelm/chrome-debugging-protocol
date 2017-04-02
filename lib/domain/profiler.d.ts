import { ChromeDebuggingDomain } from '../chrome-debugging-domain';
export declare class ProfilerDomain extends ChromeDebuggingDomain {
    enable(): Promise<any>;
    disable(): Promise<any>;
    setSamplingInterval(params: {
        interval: number;
    }): Promise<any>;
    start(): Promise<any>;
    stop(): Promise<any>;
    consoleProfileStarted(cb: Function): this;
    consoleProfileFinished(cb: Function): this;
}
