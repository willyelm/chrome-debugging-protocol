import { ChromeDebuggingDomain } from '../chrome-debugging-domain';
export declare class DebuggerDomain extends ChromeDebuggingDomain {
    enable(): Promise<{}>;
    resume(): Promise<{}>;
    pause(): Promise<{}>;
    stepOver(): Promise<{}>;
    stepInto(): Promise<{}>;
    stepOut(): Promise<{}>;
    setPauseOnExceptions(params: Object): Promise<{}>;
    setAsyncCallStackDepth(params: Object): Promise<{}>;
    setBreakpointsActive(params: Object): Promise<{}>;
    setBreakpointByUrl(params: Object): Promise<{}>;
    removeBreakpoint(params: Object): Promise<{}>;
    setBlackboxPatterns(params: Object): Promise<{}>;
    evaluateOnCallFrame(params: Object): Promise<{}>;
    paused(cb: Function): this;
    resumed(cb: Function): this;
    scriptParsed(cb: Function): this;
}
