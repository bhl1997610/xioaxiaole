var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var net;
(function (net) {
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
            net.Server.self = _this;
            return _this;
        }
        Object.defineProperty(Server, "instance", {
            get: function () {
                this._instance = new Server();
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        Server.prototype.logout = function () {
            this._socket.close();
        };
        Server.prototype.sendmsg = function (msg) {
            this._socket.send(msg);
        };
        Server.prototype.connect = function () {
            var addr = "ws://localhost:3000";
            this._socket.connectByUrl(addr);
        };
        Server.prototype.onSocketOpen = function () {
            console.log("socket connect");
            var msg = '{ "head":"paihangbang" }';
            this._socket.send(msg);
        };
        Server.prototype.onSocketClose = function () {
            console.log("socket close");
            //派发事件
            GameData.token = false;
        };
        Server.prototype.onMessageReveived = function (msg) {
            // TODO登录成功
            var dialog = ui.dialog.instance;
            var login = ui.login.instance;
            console.log("socket message");
            switch (msg) {
                case "登录成功":
                    dialog.gametext.text = "登录成功";
                    GameData.token = true;
                    Laya.stage.addChild(dialog);
                    GameData.nickname = login.username.text;
                    for (var i = 0; i < GameData.phdata2.length; i++) {
                        if (GameData.phdata2[i].name == GameData.nickname) {
                            GameData.first = GameData.phdata2[i].stage1;
                            GameData.second = GameData.phdata2[i].stage2;
                            GameData.third = GameData.phdata2[i].stage3;
                        }
                    }
                    login.remove();
                    dialog.loginsucess();
                    break;
                case "登录失败":
                    dialog.gametext.text = "登录失败";
                    Laya.stage.addChild(dialog);
                    break;
                case "已存在用户名":
                    dialog.gametext.text = "已存在用户名";
                    Laya.stage.addChild(dialog);
                    break;
                case "注册成功":
                    dialog.gametext.text = "注册成功";
                    Laya.stage.addChild(dialog);
                    break;
                default:
                    GameData.phdata = msg.split("-");
                    GameData.phdata.pop();
                    var newarr1 = [];
                    var newarr2 = [];
                    var newarr3 = [];
                    for (var i = 0; i < GameData.phdata.length; i++) {
                        newarr1.push(JSON.parse(GameData.phdata[i]));
                        newarr2.push(JSON.parse(GameData.phdata[i]));
                        newarr3.push(JSON.parse(GameData.phdata[i]));
                    }
                    newarr1.sort(function (a, b) {
                        return a.stage1 - b.stage1;
                    });
                    GameData.phdata1 = newarr1;
                    newarr2.sort(function (a, b) {
                        return a.stage2 - b.stage2;
                    });
                    GameData.phdata2 = newarr2;
                    newarr3.sort(function (a, b) {
                        return a.stage3 - b.stage3;
                    });
                    GameData.phdata3 = newarr3;
                    if (GameData.nickname) {
                        for (var i = 0; i < GameData.phdata2.length; i++) {
                            if (GameData.phdata2[i].name == GameData.nickname) {
                                GameData.first = GameData.phdata2[i].stage1;
                                GameData.second = GameData.phdata2[i].stage2;
                                GameData.third = GameData.phdata2[i].stage3;
                            }
                        }
                    }
                    ui.paihang.instance;
                    ui.paihang.self.init();
                    break;
            }
        };
        Server.prototype.onConnectError = function () {
            this.event("CONNECT_ERROR");
            GameData.token = false;
        };
        return Server;
    }(Laya.EventDispatcher));
    net.Server = Server;
})(net || (net = {}));
//# sourceMappingURL=Server.js.map