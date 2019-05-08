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
    var paihang = /** @class */ (function (_super) {
        __extends(paihang, _super);
        function paihang() {
            var _this = _super.call(this) || this;
            _this.tab.selectHandler = new Laya.Handler(_this, _this.onSelecte);
            _this.btn_close.on(Laya.Event.CLICK, _this, _this.close);
            paihang.self = _this;
            return _this;
        }
        paihang.prototype.onSelecte = function (index) {
            this.stack.selectedIndex = index;
        };
        paihang.prototype.close = function () {
            this.parent.removeChild(this);
            var home = ui.home.instance;
            Laya.stage.addChild(home);
            home.playani();
        };
        Object.defineProperty(paihang, "instance", {
            get: function () {
                this._instance = new paihang();
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        paihang.prototype.init = function () {
            this.paihang.vScrollBarSkin = "";
            this.paihang.renderHandler = new Laya.Handler(this, this.updateItem1);
            this.paihang.array = GameData.phdata1;
            this.paihang1.vScrollBarSkin = "";
            this.paihang1.renderHandler = new Laya.Handler(this, this.updateItem2);
            this.paihang1.array = GameData.phdata2;
            this.paihang2.vScrollBarSkin = "";
            this.paihang2.renderHandler = new Laya.Handler(this, this.updateItem3);
            this.paihang2.array = GameData.phdata3;
        };
        paihang.prototype.updateItem1 = function (cell, index) {
            var data = cell.dataSource;
            var mc = cell.getChildAt(0);
            var name = cell.getChildAt(1);
            var bushu = cell.getChildAt(2);
            mc.changeText(index);
            name.changeText(data.name);
            bushu.changeText(data.stage1);
        };
        paihang.prototype.updateItem2 = function (cell, index) {
            var data = cell.dataSource;
            var mc = cell.getChildAt(0);
            var name = cell.getChildAt(1);
            var bushu = cell.getChildAt(2);
            mc.changeText(index);
            name.changeText(data.name);
            bushu.changeText(data.stage2);
        };
        paihang.prototype.updateItem3 = function (cell, index) {
            var data = cell.dataSource;
            var mc = cell.getChildAt(0);
            var name = cell.getChildAt(1);
            var bushu = cell.getChildAt(2);
            mc.changeText(index);
            name.changeText(data.name);
            bushu.changeText(data.stage3);
        };
        return paihang;
    }(ui.UI.paihangUI));
    ui.paihang = paihang;
})(ui || (ui = {}));
//# sourceMappingURL=paihang.js.map