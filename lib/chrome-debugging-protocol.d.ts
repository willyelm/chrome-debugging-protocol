import { ConsoleDomain } from './domain/console';
export interface ChromeDebuggingDomains {
    Console: ConsoleDomain;
}
export interface ChromeDebuggingSubscription {
    resolve: Function;
    reject: Function;
}
export declare type ChromeDebuggingSubscriptions = Array<ChromeDebuggingSubscription>;
export declare class ChromeDebuggingProtocol {
    private socketUrl;
    private socket;
    private event;
    private nextRequestId;
    private subscriptions;
    constructor(socketUrl: string);
    didClose(cb: any): void;
    didReceiveError(cb: any): void;
    disconnect(): void;
    connect(): Promise<ChromeDebuggingDomains>;
    handleResponse(response: any): void;
}
