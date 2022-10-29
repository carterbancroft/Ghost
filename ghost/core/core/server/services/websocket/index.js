class WebSocketServiceWrapper {
    init({webSocketServer}) {
        const WebSocketService = require('./service');
        const WebSocketController = require('./controller');

        this.api = new WebSocketService({webSocketServer});
        this.controller = new WebSocketController(this.api);
    }
}

module.exports = new WebSocketServiceWrapper();
