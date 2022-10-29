class WebSocketServiceWrapper {
    init() {
        const WebSocketService = require('./service');
        const WebSocketController = require('./controller');

        this.api = new WebSocketService();
        this.controller = new WebSocketController(this.api);
    }
}

module.exports = new WebSocketServiceWrapper();
