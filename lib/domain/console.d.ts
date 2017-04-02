/// <reference types="node" />
import { EventEmitter } from 'events';
import { ChromeDebuggingRequester } from '../chrome-debugging-requester';
export declare class ConsoleDomain extends EventEmitter {
    private requester;
    private domainName;
    constructor(requester: ChromeDebuggingRequester);
    enable(): Promise<{}>;
    messageAdded(cb: Function): Promise<{}>;
}
