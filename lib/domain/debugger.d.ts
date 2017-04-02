import { ChromeDebuggingDomain } from '../chrome-debugging-domain';
import { ScriptId, RemoteObject } from './runtime';
export declare type BreakpointId = string;
export declare type CallFrameId = string;
export interface Location {
    scriptId: ScriptId;
    lineNumber: number;
    columnNumber?: number;
}
export interface Scope {
    type: string;
    object: RemoteObject;
    name?: string;
    startLocation?: Location;
    endLocation?: Location;
}
export interface DebuggerCallFrame {
    callFrameId: CallFrameId;
    functionName: string;
    functionLocation?: Location;
    location: Location;
    scopeChain: Array<Scope>;
    this: RemoteObject;
    returnValue: RemoteObject;
}
export declare class DebuggerDomain extends ChromeDebuggingDomain {
    enable(): Promise<any>;
    disable(): Promise<any>;
    setBreakpointsActive(params: {
        active: boolean;
    }): Promise<any>;
    setSkipAllPauses(params: {
        skip: boolean;
    }): Promise<any>;
    setBreakpointByUrl(params: {
        lineNumber: number;
        url?: string;
        urlRegex?: string;
        columnNumber?: number;
        condition?: string;
    }): Promise<{
        breakpointId: BreakpointId;
        locations: Array<Location>;
    }>;
    setBreakpoint(params: {
        location: string;
        condition?: string;
    }): Promise<{
        breakpointId: BreakpointId;
        actualLocation: Location;
    }>;
    removeBreakpoint(params: {
        breakpointId: string;
    }): Promise<any>;
    continueToLocation(params: {
        location: string;
    }): Promise<any>;
    stepOver(): Promise<any>;
    stepInto(): Promise<any>;
    stepOut(): Promise<any>;
    pause(): Promise<any>;
    resume(): Promise<any>;
    setScriptSource(params: {
        scriptId: string;
        scriptSource: string;
        dryRun?: boolean;
    }): Promise<any>;
    restartFrame(params: {
        callFrameId: string;
    }): Promise<any>;
    getScriptSource(params: {
        scriptId: string;
    }): Promise<any>;
    setPauseOnExceptions(params: {
        state: string;
    }): Promise<any>;
    evaluateOnCallFrame(params: {
        callFrameId: string;
        expression: string;
        objectGroup?: string;
        includeCommandLineAPI?: boolean;
        silent?: boolean;
        returnByValue?: boolean;
        generatePreview?: boolean;
    }): Promise<any>;
    setVariableValue(params: {
        scopeNumber: number;
        variableName: string;
        newValue: {
            value?: any;
            unserializableValue?: string;
            objectId?: string;
        };
        callFrameId: string;
    }): Promise<any>;
    setAsyncCallStackDepth(params: {
        maxDepth: number;
    }): Promise<any>;
    setBlackboxPatterns(params: Object): Promise<any>;
    scriptParsed(cb: Function): this;
    scriptFailedToParse(cb: Function): this;
    breakpointResolved(cb: Function): this;
    paused(cb: Function): this;
    resumed(cb: Function): this;
}
