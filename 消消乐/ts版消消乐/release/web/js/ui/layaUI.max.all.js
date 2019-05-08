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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var UI;
    (function (UI) {
        var homeViewUI = /** @class */ (function (_super) {
            __extends(homeViewUI, _super);
            function homeViewUI() {
                return _super.call(this) || this;
            }
            homeViewUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.UI.homeViewUI.uiView);
            };
            homeViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1200 }, "child": [{ "type": "Label", "props": { "y": 73, "x": 154, "width": 412, "var": "txtTitle", "text": "宝藏模式", "pivotY": 8, "height": 111, "fontSize": 100, "color": "#1fc310", "bold": true } }] };
            return homeViewUI;
        }(View));
        UI.homeViewUI = homeViewUI;
    })(UI = ui.UI || (ui.UI = {}));
})(ui || (ui = {}));
(function (ui) {
    var UI;
    (function (UI) {
        var UITestUI = /** @class */ (function (_super) {
            __extends(UITestUI, _super);
            function UITestUI() {
                return _super.call(this) || this;
            }
            UITestUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.UI.UITestUI.uiView);
            };
            UITestUI.uiView = { "type": "View", "props": { "width": 400, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 141, "x": 128, "width": 178, "skin": "home/type15.png", "height": 214 } }, { "type": "Label", "props": { "y": 210, "x": 169, "width": 95, "text": "label", "height": 51, "fontSize": 50, "color": "#d43835" } }] };
            return UITestUI;
        }(View));
        UI.UITestUI = UITestUI;
    })(UI = ui.UI || (ui.UI = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map