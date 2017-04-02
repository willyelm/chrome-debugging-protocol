"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const chrome_debugging_requester_1 = require("./chrome-debugging-requester");
const WebSocket = require("ws");
class ChromeDebuggingProtocol {
    constructor(socketUrl) {
        this.socketUrl = socketUrl;
        this.event = new events_1.EventEmitter();
    }
    didClose(cb) {
        this.event.addListener('didClose', cb);
    }
    didReceiveError(cb) {
        this.event.addListener('didReceiveError', cb);
    }
    disconnect() {
        this.socket.close();
        this.event.emit('didClose');
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.socket = new WebSocket(this.socketUrl);
            this.socket.on('error', reject);
            this.socket.on('open', () => {
                this.socket.removeListener('error', reject);
                this.socket.on('error', (error) => {
                    this.event.emit('didReceiveError', error);
                });
                this.requester = new chrome_debugging_requester_1.ChromeDebuggingRequester(this.socket);
                let domains = this.requester.getDomains();
                resolve(domains);
            });
            this.socket.on('close', () => this.event.emit('didClose'));
        });
    }
}
exports.ChromeDebuggingProtocol = ChromeDebuggingProtocol;
//# sourceMappingURL=chrome-debugging-protocol.js.map