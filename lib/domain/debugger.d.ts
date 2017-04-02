import { ChromeDebuggingDomain } from '../chrome-debugging-domain';
export declare class DebuggerDomain extends ChromeDebuggingDomain {
    enable(): Promise<{}>;
    disable(): Promise<{}>;
    setBreakpointsActive(params: {
        active: boolean;
    }): Promise<{}>;
    setSkipAllPauses(params: {
        skip: boolean;
    }): Promise<{}>;
    setBreakpointByUrl(params: {
        lineNumber: number;
        url?: string;
        urlRegex?: string;
        columnNumber?: number;
        condition?: string;
    }): Promise<{}>;
    setBreakpoint(params: {
        location: string;
        condition?: string;
    }): Promise<{}>;
    removeBreakpoint(params: {
        breakpointId: string;
    }): Promise<{}>;
    continueToLocation(params: {
        location: string;
    }): Promise<{}>;
    stepOver(): Promise<{}>;
    stepInto(): Promise<{}>;
    stepOut(): Promise<{}>;
    pause(): Promise<{}>;
    resume(): Promise<{}>;
    setScriptSource(params: {
        scriptId: string;
        scriptSource: string;
        dryRun?: boolean;
    }): Promise<{}>;
    restartFrame(params: {
        callFrameId: string;
    }): Promise<{}>;
    getScriptSource(params: {
        scriptId: string;
    }): Promise<{}>;
    setPauseOnExceptions(params: {
        state: string;
    }): Promise<{}>;
    evaluateOnCallFrame(params: {
        callFrameId: string;
        expression: string;
        objectGroup?: string;
        includeCommandLineAPI?: boolean;
        silent?: boolean;
        returnByValue?: boolean;
        generatePreview?: boolean;
    }): Promise<{}>;
    setVariableValue(params: {
        scopeNumber: number;
        variableName: string;
        newValue: {
            value?: any;
            unserializableValue?: string;
            objectId?: string;
        };
        callFrameId: string;
    }): Promise<{}>;
    setAsyncCallStackDepth(params: {
        maxDepth: number;
    }): Promise<{}>;
    setBlackboxPatterns(params: Object): Promise<{}>;
    scriptParsed(cb: Function): this;
    scriptFailedToParse(cb: Function): this;
    breakpointResolved(cb: Function): this;
    paused(cb: Function): this;
    resumed(cb: Function): this;
}
