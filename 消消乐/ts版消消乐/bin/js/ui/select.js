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
    var select = /** @class */ (function (_super) {
        __extends(select, _super);
        function select() {
            var _this = _super.call(this) || this;
            _this.first.on(Laya.Event.CLICK, _this, _this.firstclcik);
            _this.second.on(Laya.Event.CLICK, _this, _this.secondclcik);
            _this.third.on(Laya.Event.CLICK, _this, _this.thirdclcik);
            var levelData = Laya.loader.getRes("res/data/l1.json");
            // 适配器
            _this.uiManager = new UIManager();
            select.self = _this;
            return _this;
        }
        Object.defineProperty(select, "instance", {
            get: function () {
                this._instance = new select();
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        select.prototype.firstclcik = function () {
            GameData.curstage = 1;
            this.parent.removeChild(this);
            this.uiManager.openUI(UIType.homeView, null, null, []);
        };
        select.prototype.secondclcik = function () {
            GameData.curstage = 2;
            this.parent.removeChild(this);
            this.uiManager.openUI(UIType.homeView, null, null, [19, 20, 28, 29, 24, 25, 33, 34, 46, 47, 55, 56, 51, 52, 60, 61]);
        };
        select.prototype.thirdclcik = function () {
            GameData.curstage = 3;
            this.parent.removeChild(this);
            this.uiManager.openUI(UIType.homeView, null, null, [30, 31, 32, 39, 40, 41, 48, 49, 50, 10, 12, 14, 16, 28, 46, 64, 34, 52, 70, 66, 68]);
        };
        select.prototype.remove = function () {
            this.parent.removeChild(this);
            this.destroy();
        };
        return select;
    }(ui.UI.selectUI));
    ui.select = select;
})(ui || (ui = {}));
//# sourceMappingURL=select.js.map