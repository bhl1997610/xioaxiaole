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
    var dialog = /** @class */ (function (_super) {
        __extends(dialog, _super);
        function dialog() {
            var _this = _super.call(this) || this;
            _this.btn_close.on(Laya.Event.MOUSE_OUT, _this, _this.recover);
            _this.btn_close.on(Laya.Event.CLICK, _this, _this.close);
            _this.btn_close.on(Laya.Event.MOUSE_OVER, _this, _this.small, [_this.btn_close]);
            return _this;
        }
        Object.defineProperty(dialog, "instance", {
            get: function () {
                this._instance = new dialog();
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        dialog.prototype.close = function () {
            this.parent.removeChild(this);
        };
        dialog.prototype.recover = function () {
            this.btn_close.scale(1, 1);
        };
        dialog.prototype.small = function (btn) {
            btn.scale(0.8, 0.8);
        };
        dialog.prototype.remove = function () {
            this.parent.removeChild(this);
        };
        dialog.prototype.loginsucess = function () {
            var _this = this;
            Laya.timer.once(1000, this, function () {
                _this.remove();
                var home = ui.home.instance;
                Laya.stage.addChild(home);
                home.playani();
            });
        };
        return dialog;
    }(ui.UI.dialogUI));
    ui.dialog = dialog;
})(ui || (ui = {}));
//# sourceMappingURL=dialog.js.map