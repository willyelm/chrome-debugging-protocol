import { ChromeDebuggingDomain } from '../chrome-debugging-domain';
export declare type ScriptId = string;
export declare type RemoteObjectId = string;
export declare type UnserializableValue = string;
export interface RuntimeCallFrame {
    functionName: string;
    scriptId: ScriptId;
    url: string;
    lineNumber: number;
    columnNumber: number;
}
export interface StackTrace {
    description?: string;
    callFrames: Array<RuntimeCallFrame>;
    parent: StackTrace;
    promiseCreationFrame?: RuntimeCallFrame;
}
export interface RemoteObject {
    type: string;
    subtype?: string;
    className?: string;
    value?: any;
    unserializableValue?: UnserializableValue;
    description?: string;
    objectId: RemoteObjectId;
}
export declare class RuntimeDomain extends ChromeDebuggingDomain {
    evaluate(params: {
        expression: string;
        objectGroup?: string;
        includeCommandLineAPI?: boolean;
        silent?: boolean;
        contextId?: boolean;
        returnByValue?: boolean;
        generatePreview?: boolean;
        userGesture?: boolean;
        awaitPromise?: boolean;
    }): Promise<any>;
    awaitPromise(params: {
        promiseObjectId: string;
        returnByValue?: boolean;
        generatePreview?: boolean;
    }): Promise<any>;
    callFunctionOn(params: {
        objectId: string;
        functionDeclaration: string;
        arguments?: Array<{
            value?: string;
            unserializableValue?: string;
            objectId?: string;
        }>;
        silent?: boolean;
        returnByValue?: boolean;
        generatePreview?: boolean;
        userGesture?: boolean;
        awaitPromise?: boolean;
    }): Promise<any>;
    getProperties(params: {
        objectId: string;
        ownProperties?: boolean;
        accessorPropertiesOnly?: boolean;
        generatePreview?: boolean;
    }): Promise<any>;
    releaseObject(params: {
        objectId: string;
    }): Promise<any>;
    releaseObjectGroup(params: {
        objectGroup: string;
    }): Promise<any>;
    runIfWaitingForDebugger(): Promise<any>;
    enable(): Promise<any>;
    disable(): Promise<any>;
    discardConsoleEntries(): Promise<any>;
    compileScript(params: {
        expression: string;
        sourceURL: string;
        persistScript: boolean;
        executionContextId?: number;
    }): Promise<any>;
    runScript(params: {
        scriptId: string;
        executionContextId?: string;
        objectGroup?: string;
        silent?: boolean;
        includeCommandLineAPI?: boolean;
        returnByValue?: boolean;
        generatePreview?: boolean;
        awaitPromise?: boolean;
    }): Promise<any>;
    executionContextCreated(cb: Function): this;
    executionContextDestroyed(cb: Function): this;
    executionContextsCleared(cb: Function): this;
    exceptionThrown(cb: Function): this;
    exceptionRevoked(cb: Function): this;
    consoleAPICalled(cb: Function): this;
    inspectRequested(cb: Function): this;
}
