/// <reference types="node" />
import { EventEmitter } from 'events';
import { ChromeDebuggingRequester } from '../chrome-debugging-requester';
export declare class DebuggerDomain extends EventEmitter {
    private requester;
    private domainName;
    constructor(requester: ChromeDebuggingRequester);
    enable(): Promise<{}>;
    setBreakpointsActive(params: any): Promise<{}>;
    scriptParsed(cb: Function): void;
}
