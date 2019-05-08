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
    var home = /** @class */ (function (_super) {
        __extends(home, _super);
        function home() {
            var _this = _super.call(this) || this;
            _this.gamestart.on(Laya.Event.CLICK, _this, _this.start);
            _this.paihang.on(Laya.Event.CLICK, _this, _this.paihangclick);
            _this.gamestart.on(Laya.Event.MOUSE_OUT, _this, _this.reover);
            _this.paihang.on(Laya.Event.MOUSE_OUT, _this, _this.reover);
            _this.gamestart.on(Laya.Event.MOUSE_MOVE, _this, _this.small, [_this.gamestart]);
            _this.paihang.on(Laya.Event.MOUSE_MOVE, _this, _this.small, [_this.paihang]);
            return _this;
        }
        Object.defineProperty(home, "instance", {
            get: function () {
                this._instance = new home();
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        home.prototype.playani = function () {
            this.ani1.play(0, false);
        };
        home.prototype.start = function () {
            var _this = this;
            this.gamestart.scale(0.8, 0.8);
            if (GameData.token) {
                this.ani2.play(0, false);
                this.gamestart.mouseEnabled = false;
                this.paihang.mouseEnabled = false;
                Laya.Tween.to(GameMain.Instance.gametext, { alpha: 0 }, 1000);
                Laya.timer.once(1000, this, function () {
                    _this.parent.removeChild(_this);
                    Laya.stage.addChild(ui.select.instance);
                    _this.destroy();
                });
            }
        };
        home.prototype.paihangclick = function () {
            var _this = this;
            this.paihang.scale(0.8, 0.8);
            if (GameData.token) {
                this.ani2.play(0, false);
                this.gamestart.mouseEnabled = false;
                this.paihang.mouseEnabled = false;
                Laya.Tween.to(GameMain.Instance.gametext, { alpha: 0 }, 1000);
                Laya.timer.once(1000, this, function () {
                    _this.parent.removeChild(_this);
                    _this.destroy();
                    Laya.stage.addChild(ui.paihang.self);
                });
            }
        };
        home.prototype.reover = function () {
            this.gamestart.scale(1, 1);
            this.paihang.scale(1, 1);
        };
        home.prototype.small = function (btn) {
            btn.scale(0.8, 0.8);
        };
        return home;
    }(ui.UI.homeUI));
    ui.home = home;
})(ui || (ui = {}));
//# sourceMappingURL=home.js.map