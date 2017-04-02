/// <reference types="node" />
import { EventEmitter } from 'events';
import { ChromeDebuggingRequester } from '../chrome-debugging-requester';
export declare class PageDomain extends EventEmitter {
    private requester;
    constructor(requester: ChromeDebuggingRequester);
    navigate(params: Object): Promise<{}>;
}
