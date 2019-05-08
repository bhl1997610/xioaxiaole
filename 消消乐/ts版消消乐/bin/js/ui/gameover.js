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
    var gameover = /** @class */ (function (_super) {
        __extends(gameover, _super);
        function gameover() {
            var _this = _super.call(this) || this;
            _this.queding.on(Laya.Event.CLICK, _this, _this.click);
            return _this;
        }
        Object.defineProperty(gameover, "instance", {
            get: function () {
                this._instance = new gameover();
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        gameover.prototype.click = function () {
            this.parent.removeChild(this);
            ui.select.self.uiManager.hideUI(UIType.homeView);
            homeView.instance.close();
            GameData.isgameover = false;
        };
        return gameover;
    }(ui.UI.resultUI));
    ui.gameover = gameover;
})(ui || (ui = {}));
//# sourceMappingURL=gameover.js.map