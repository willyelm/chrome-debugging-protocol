import { ChromeDebuggingDomain } from '../chrome-debugging-domain';
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
    }): Promise<{}>;
    awaitPromise(params: {
        promiseObjectId: string;
        returnByValue?: boolean;
        generatePreview?: boolean;
    }): Promise<{}>;
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
    }): Promise<{}>;
    getProperties(params: {
        objectId: string;
        ownProperties?: boolean;
        accessorPropertiesOnly?: boolean;
        generatePreview?: boolean;
    }): Promise<{}>;
    releaseObject(params: {
        objectId: string;
    }): Promise<{}>;
    releaseObjectGroup(params: {
        objectGroup: string;
    }): Promise<{}>;
    runIfWaitingForDebugger(): Promise<{}>;
    enable(): Promise<{}>;
    disable(): Promise<{}>;
    discardConsoleEntries(): Promise<{}>;
    compileScript(params: {
        expression: string;
        sourceURL: string;
        persistScript: boolean;
        executionContextId?: number;
    }): Promise<{}>;
    runScript(params: {
        scriptId: string;
        executionContextId?: string;
        objectGroup?: string;
        silent?: boolean;
        includeCommandLineAPI?: boolean;
        returnByValue?: boolean;
        generatePreview?: boolean;
        awaitPromise?: boolean;
    }): Promise<{}>;
    executionContextCreated(cb: Function): this;
    executionContextDestroyed(cb: Function): this;
    executionContextsCleared(cb: Function): this;
    exceptionThrown(cb: Function): this;
    exceptionRevoked(cb: Function): this;
    consoleAPICalled(cb: Function): this;
    inspectRequested(cb: Function): this;
}
