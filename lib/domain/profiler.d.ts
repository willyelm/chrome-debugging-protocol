import { ChromeDebuggingDomain } from '../chrome-debugging-domain';
export declare class ProfilerDomain extends ChromeDebuggingDomain {
    enable(): Promise<{}>;
    setSamplingInterval(params: Object): Promise<{}>;
}
