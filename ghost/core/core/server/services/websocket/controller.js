module.exports = class WebSocketController {
    constructor(service) {
        this.service = service;
    }

    broadcast(data) {
        this.service.broadcast(data);
    }
};
