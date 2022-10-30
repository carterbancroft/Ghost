module.exports = class WebSocketService {
    constructor({webSocketServer}) {
        this.webSocketServer = webSocketServer;
    }

    broadcast(data) {
        this.webSocketServer.clients.forEach((client) => {
            if (client !== this.webSocketServer) {
                client.send(JSON.stringify(data));
            }
        });
    }
};
