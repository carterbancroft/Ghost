// I think I like this pattern of making this be a service/controller setup. I feels right
// as compared to the other pieces of the code. Especially when I noticed services don't all
// relate to API logic (like with webhooks).
//
// One thing to note... None of this websocket logic is unit tested here on the BE. It likely needs
// some testing but I'm going to let it slip. I'm trying to balance getting this to a working state
// while not spending too much time getting it perfectly production ready.
//
// I hope I'm making a wise decision there... I'll be real bummed if my decision not to unit test this
// is my downfall! haha

class WebSocketServiceWrapper {
    init({webSocketServer}) {
        const WebSocketService = require('./service');
        const WebSocketController = require('./controller');

        this.api = new WebSocketService({webSocketServer});
        this.controller = new WebSocketController(this.api);
    }
}

module.exports = new WebSocketServiceWrapper();
