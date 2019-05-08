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
/*
* 测试UI;
*/
var UITest = /** @class */ (function (_super) {
    __extends(UITest, _super);
    function UITest() {
        var _this = _super.call(this) || this;
        //定义UI类型
        _this.type = UIType.UITest;
        return _this;
        //UI内元素初始化
    }
    UITest.prototype.open = function (obj, call) {
        //初始化UI，数据加载
        console.log("进入界面");
        //加载完后调用回调显示UI
        if (call) {
            call.run();
            call = null;
        }
    };
    UITest.prototype.close = function () {
    };
    UITest.prototype.hide = function () {
    };
    //回调后会调用show，用于显示UI时的一些表现
    UITest.prototype.show = function () {
    };
    return UITest;
}(ui.UI.UITestUI));
//# sourceMappingURL=UITest.js.map