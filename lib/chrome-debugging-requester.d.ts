/// <reference types="ws" />
import * as WebSocket from 'ws';
import { Domains } from './domain/index';
export interface ChromeDebuggingSubscription {
    resolve: Function;
    reject: Function;
}
export declare type ChromeDebuggingSubscriptions = Array<ChromeDebuggingSubscription>;
export interface ChromeDebuggingRequest {
    id: number;
    method: string;
    params?: Object;
}
export declare class ChromeDebuggingRequester {
    private socket;
    private nextRequestId;
    private subscriptions;
    private domains;
    constructor(socket: WebSocket);
    getDomains(): Domains;
    responseHandler(response: any): void;
    send(method: string, params?: any): Promise<any>;
}
