var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Server = /** @class */ (function (_super) {
    __extends(Server, _super);
    function Server() {
        var _this = _super.call(this) || this;
        _this._connectReady = false; //通讯状态
        _this._socket = new Laya.Socket();
        _this._socket.endian = Laya.Socket.BIG_ENDIAN;
        _this._socket.on(Laya.Event.OPEN, _this, _this.onSocketOpen);
        _this._socket.on(Laya.Event.CLOSE, _this, _this.onSocketClose);
        _this._socket.on(Laya.Event.MESSAGE, _this, _this.onMessageReveived);
        _this._socket.on(Laya.Event.ERROR, _this, _this.onConnectError);
        return _this;
    }
    Server.prototype.logout = function () {
        this._socket.close();
    };
    Server.prototype.connect = function (uid, nickname) {
        this._uid = uid;
        this._nickname = nickname;
        var addr = "ws://48.15.150.3698:7001/ws";
        this._socket.connectByUrl(addr);
    };
    Server.prototype.onSocketOpen = function () {
        if (this._uid) {
            var tokin = "123";
            var uuid = "123";
            var params = "";
            //TODO 作何处理
            this._connectReady = true;
        }
        else {
            console.log("Not have uid!");
        }
    };
    Server.prototype.onSocketClose = function () {
        console.log("socket close");
        //派发事件
        this.event("CONNECT_CLOSE");
        this._connectReady = false;
    };
    Server.prototype.onMessageReveived = function () {
        // TODO登录成功
        this.event("LOGIN_SUCCESS");
    };
    Server.prototype.onConnectError = function () {
        this.event("CONNECT_ERROR");
        this._connectReady = false;
    };
    return Server;
}(Laya.EventDispatcher));
var server = new Server();
//# sourceMappingURL=Server.js.map