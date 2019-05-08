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
var ui;
(function (ui) {
    var login = /** @class */ (function (_super) {
        __extends(login, _super);
        function login() {
            var _this = _super.call(this) || this;
            _this.login.on(Laya.Event.CLICK, _this, _this.loginClick);
            _this.register.on(Laya.Event.CLICK, _this, _this.registerClick);
            _this.login.on(Laya.Event.MOUSE_OVER, _this, _this.small, [_this.login]);
            _this.register.on(Laya.Event.MOUSE_OVER, _this, _this.small, [_this.register]);
            _this.login.on(Laya.Event.MOUSE_OUT, _this, _this.recover);
            _this.register.on(Laya.Event.MOUSE_OUT, _this, _this.recover);
            return _this;
        }
        Object.defineProperty(login, "instance", {
            get: function () {
                if (!this._instance) {
                    this._instance = new login();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        login.prototype.loginClick = function () {
            var name = this.username.text;
            var password = this.password.text;
            if (name == "" || password == "") {
                var dialog_1 = ui.dialog.instance;
                Laya.stage.addChild(dialog_1);
                dialog_1.gametext.changeText("用户名或密码不能为空");
                return;
            }
            var msg = '{ "head":"login", "name":' + '"' + name + '"' + ', "password":' + '"' + password + '"' + ' }';
            net.Server.self.sendmsg(msg);
        };
        login.prototype.registerClick = function () {
            var name = this.username.text;
            var password = this.password.text;
            if (name == "" || password == "") {
                var dialog_2 = ui.dialog.instance;
                Laya.stage.addChild(dialog_2);
                dialog_2.gametext.changeText("用户名或密码不能为空");
                return;
            }
            var msg = '{ "head":"register", "name":' + '"' + name + '"' + ', "password":' + '"' + password + '"' + ' }';
            net.Server.self.sendmsg(msg);
        };
        login.prototype.small = function (btn) {
            btn.scale(0.8, 0.8);
        };
        login.prototype.recover = function () {
            this.login.scale(1, 1);
            this.register.scale(1, 1);
        };
        login.prototype.remove = function () {
            this.parent.removeChild(this);
            this.destroy();
        };
        return login;
    }(ui.UI.loginUI));
    ui.login = login;
})(ui || (ui = {}));
//# sourceMappingURL=login.js.map