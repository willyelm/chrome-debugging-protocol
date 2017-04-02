import { Domains } from './domain/index';
export declare class ChromeDebuggingProtocol {
    private socketUrl;
    private socket;
    private event;
    private requester;
    constructor(socketUrl: string);
    didClose(cb: any): void;
    didReceiveError(cb: any): void;
    disconnect(): void;
    connect(): Promise<Domains>;
}
