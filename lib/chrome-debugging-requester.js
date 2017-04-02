"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./domain/index");
class ChromeDebuggingRequester {
    constructor(socket) {
        this.socket = socket;
        this.nextRequestId = 0;
        this.subscriptions = [];
        this.domains = {
            Console: new index_1.ConsoleDomain(this),
            Page: new index_1.PageDomain(this),
            Debugger: new index_1.DebuggerDomain(this)
        };
        socket.on('message', (message) => {
            let response = JSON.parse(message);
            this.responseHandler(response);
        });
    }
    getDomains() {
        return this.domains;
    }
    responseHandler(response) {
        if (Number(response.id) >= 0 && this.subscriptions[response.id]) {
            let subscription = this.subscriptions[response.id];
            if (response.result) {
                subscription.resolve(response.result);
            }
            else {
                subscription.reject(response.error);
            }
        }
        else if (response.error) {
            console.log('unhandled error', response);
        }
        else {
            let parse = String(response.method).split('.');
            let domainName = parse[0];
            let methodName = parse[1];
            if (this.domains[domainName]) {
                this.domains[domainName].emit(methodName);
            }
            else {
                // console.log('unhandled', response)
            }
        }
    }
    send(method, params) {
        return new Promise((resolve, reject) => {
            let options = {
                id: this.nextRequestId,
                method: method
            };
            if (params) {
                options.params = params;
            }
            this.subscriptions[options.id] = {
                resolve: resolve,
                reject: reject
            };
            let body = JSON.stringify(options);
            this.socket.send(body);
            console.log('sending', body);
            this.nextRequestId++;
        });
    }
}
exports.ChromeDebuggingRequester = ChromeDebuggingRequester;
//# sourceMappingURL=chrome-debugging-requester.js.map