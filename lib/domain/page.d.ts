import { ChromeDebuggingDomain } from '../chrome-debugging-domain';
export declare class PageDomain extends ChromeDebuggingDomain {
    enable(): Promise<{}>;
    disable(): Promise<{}>;
    reload(params: {
        ignoreCache?: boolean;
        scriptToEvaluateOnLoad?: string;
    }): Promise<{}>;
    navigate(params: {
        url: string;
    }): Promise<{}>;
    handleJavaScriptDialog(params: {
        accept: boolean;
        promptText?: string;
    }): Promise<{}>;
    domContentEventFired(cb: Function): this;
    loadEventFired(cb: Function): this;
    frameAttached(cb: Function): this;
    frameNavigated(cb: Function): this;
    frameDetached(cb: Function): this;
    javascriptDialogOpening(cb: Function): this;
    javascriptDialogClosed(cb: Function): this;
    interstitialShown(cb: Function): this;
    interstitialHidden(cb: Function): this;
    navigationRequested(cb: Function): this;
}
