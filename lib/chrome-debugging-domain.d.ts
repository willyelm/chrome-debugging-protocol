/// <reference types="node" />
import { EventEmitter } from 'events';
import { ChromeDebuggingRequester } from './chrome-debugging-requester';
export declare class ChromeDebuggingDomain extends EventEmitter {
    private requester;
    private domainName;
    constructor(requester: ChromeDebuggingRequester);
    setDomainFromClass(): void;
    send(method: string, params?: Object): Promise<any>;
}
