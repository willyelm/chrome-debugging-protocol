"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const console_1 = require("./domain/console");
const WebSocket = require("ws");
class ChromeDebuggingProtocol {
    constructor(socketUrl) {
        this.socketUrl = socketUrl;
        this.nextRequestId = 0;
        this.subscriptions = [];
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
                let domains = {
                    Console: new console_1.ConsoleDomain()
                };
                resolve(domains);
            });
            this.socket.on('message', (message) => {
                let response = JSON.parse(message);
                this.handleResponse(response);
            });
            this.socket.on('close', () => this.event.emit('didClose'));
        });
    }
    handleResponse(response) {
    }
}
exports.ChromeDebuggingProtocol = ChromeDebuggingProtocol;
//# sourceMappingURL=chrome-debugging-protocol.js.map