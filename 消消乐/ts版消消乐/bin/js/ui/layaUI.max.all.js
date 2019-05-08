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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var UI;
    (function (UI) {
        var dialogUI = /** @class */ (function (_super) {
            __extends(dialogUI, _super);
            function dialogUI() {
                return _super.call(this) || this;
            }
            dialogUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.UI.dialogUI.uiView);
            };
            dialogUI.uiView = { "type": "View", "props": { "width": 650, "height": 1200 }, "child": [{ "type": "Image", "props": { "y": 436, "x": 155, "width": 350, "visible": true, "var": "dialog", "skin": "ui/bounced/pop_dialog.png", "height": 350 }, "child": [{ "type": "Button", "props": { "y": 23, "x": 312, "width": 38, "var": "btn_close", "stateNum": 1, "skin": "ui/goldman/btn_off_small.png", "pivotY": 19, "pivotX": 19, "height": 38 } }, { "type": "Text", "props": { "y": 49, "x": 0, "width": 350, "var": "gametext", "valign": "middle", "text": "用户名或密码错误", "height": 100, "fontSize": 26, "font": "Microsoft YaHei", "color": "#030000", "align": "center" } }] }] };
            return dialogUI;
        }(View));
        UI.dialogUI = dialogUI;
    })(UI = ui.UI || (ui.UI = {}));
})(ui || (ui = {}));
(function (ui) {
    var UI;
    (function (UI) {
        var homeUI = /** @class */ (function (_super) {
            __extends(homeUI, _super);
            function homeUI() {
                return _super.call(this) || this;
            }
            homeUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.UI.homeUI.uiView);
            };
            homeUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 640, "height": 1200 }, "child": [{ "type": "Button", "props": { "y": 681, "x": 320, "width": 302, "var": "gamestart", "stateNum": 1, "skin": "ui/sigin/bg_quan.png", "sizeGrid": "9,7,9,7", "pivotY": 63, "pivotX": 151, "labelStroke": 2, "labelSize": 46, "labelFont": "Microsoft YaHei", "labelColors": "yellow", "labelBold": false, "labelAlign": "center", "label": "开始游戏", "height": 126 }, "compId": 2 }, { "type": "Button", "props": { "y": 883, "x": 320, "width": 302, "var": "paihang", "stateNum": 1, "skin": "ui/sigin/bg_quan.png", "sizeGrid": "9,7,9,7", "pivotY": 63, "pivotX": 151, "labelStroke": 2, "labelSize": 46, "labelFont": "Microsoft YaHei", "labelColors": "yellow", "labelBold": false, "labelAlign": "center", "label": "排行榜", "height": 126 }, "compId": 4 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": 500, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }, { "value": 550, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 10 }, { "value": 620, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 20 }], "x": [{ "value": 320, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }], "var": [{ "value": "gamestart", "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "var", "index": 0 }], "alpha": [{ "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 20 }] } }, { "target": 4, "keyframes": { "y": [{ "value": 700, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }, { "value": 750, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 10 }, { "value": 821, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 20 }], "x": [{ "value": 320, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 0 }], "var": [{ "value": "paihang", "tweenMethod": "linearNone", "tween": false, "target": 4, "key": "var", "index": 0 }], "alpha": [{ "value": 0.1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 0.5, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 10 }, { "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 20 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": 619, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }, { "value": 670, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 10 }, { "value": 720, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 20 }], "x": [{ "value": 320, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "alpha", "index": 20 }] } }, { "target": 4, "keyframes": { "y": [{ "value": 821, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 0 }, { "value": 871, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 10 }, { "value": 921, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "y", "index": 20 }], "x": [{ "value": 320, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "x", "index": 0 }], "alpha": [{ "value": 1, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 4, "key": "alpha", "index": 20 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 0 }] };
            return homeUI;
        }(View));
        UI.homeUI = homeUI;
    })(UI = ui.UI || (ui.UI = {}));
})(ui || (ui = {}));
(function (ui) {
    var UI;
    (function (UI) {
        var homeViewUI = /** @class */ (function (_super) {
            __extends(homeViewUI, _super);
            function homeViewUI() {
                return _super.call(this) || this;
            }
            homeViewUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.UI.homeViewUI.uiView);
            };
            homeViewUI.uiView = { "type": "View", "props": { "width": 650, "height": 1200 }, "child": [{ "type": "Image", "props": { "y": 1100, "x": 100, "width": 120, "visible": false, "var": "hang", "skin": "home/zhenghang.png", "pivotY": 60, "pivotX": 60, "height": 120 }, "child": [{ "type": "Text", "props": { "y": 20, "x": 140, "width": 59, "var": "hangnum", "text": "x1", "height": 67, "fontSize": 50, "font": "Microsoft YaHei", "color": "#000000" } }] }, { "type": "Image", "props": { "y": 1100, "x": 480, "width": 120, "visible": false, "var": "lie", "skin": "home/zhenglie.png", "pivotY": 60, "pivotX": 60, "height": 120 }, "child": [{ "type": "Text", "props": { "y": 20, "x": 140, "width": 59, "var": "lienum", "text": "x1", "height": 67, "fontSize": 50, "font": "Microsoft YaHei", "color": "#000000" } }] }] };
            return homeViewUI;
        }(View));
        UI.homeViewUI = homeViewUI;
    })(UI = ui.UI || (ui.UI = {}));
})(ui || (ui = {}));
(function (ui) {
    var UI;
    (function (UI) {
        var loginUI = /** @class */ (function (_super) {
            __extends(loginUI, _super);
            function loginUI() {
                return _super.call(this) || this;
            }
            loginUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.UI.loginUI.uiView);
            };
            loginUI.uiView = { "type": "View", "props": { "width": 640, "height": 1200 }, "child": [{ "type": "Image", "props": { "y": 450, "x": 145, "width": 350, "skin": "ui/sigin/bg_jewel.png", "sizeGrid": "15,20,15,20", "height": 350 }, "child": [{ "type": "Text", "props": { "y": 1, "x": 36, "width": 278, "valign": "middle", "text": "用户登录", "height": 54, "fontSize": 26, "font": "Microsoft YaHei", "color": "#030303", "bold": true, "align": "center" } }, { "type": "TextInput", "props": { "y": 100, "x": 120, "width": 180, "var": "username", "type": "text", "skin": "ui/friend/lable_djshuliang.png", "promptColor": "#f4ecec", "prompt": "username", "height": 30 }, "child": [{ "type": "Text", "props": { "y": -7, "x": -69, "width": 62, "valign": "middle", "text": "用户名：", "pivotY": 1, "pivotX": 1, "height": 45, "fontSize": 20, "font": "Microsoft YaHei", "color": "#01040a", "align": "center" } }] }, { "type": "TextInput", "props": { "y": 160, "x": 120, "width": 180, "var": "password", "type": "password", "skin": "ui/friend/lable_djshuliang.png", "promptColor": "#f4ecec", "prompt": "password", "height": 30 }, "child": [{ "type": "Text", "props": { "y": -7, "x": -50, "width": 62, "valign": "middle", "text": "密码：", "pivotY": 1, "pivotX": 1, "height": 45, "fontSize": 20, "font": "Microsoft YaHei", "color": "#01040a", "align": "center" } }] }] }, { "type": "Button", "props": { "y": 720, "x": 250, "width": 100, "var": "login", "stateNum": 1, "skin": "ui/friend/tab_hy0.png", "sizeGrid": "5,5,5,5", "pivotY": 20, "pivotX": 50, "labelSize": 15, "labelPadding": "3", "labelFont": "Microsoft YaHei", "labelBold": false, "labelAlign": "center", "label": "登录", "height": 40 } }, { "type": "Button", "props": { "y": 720, "x": 390, "width": 100, "var": "register", "stateNum": 1, "skin": "ui/friend/tab_hy0.png", "sizeGrid": "5,5,5,5", "pivotY": 20, "pivotX": 50, "labelSize": 15, "labelPadding": "3", "labelFont": "Microsoft YaHei", "labelBold": false, "labelAlign": "center", "label": "注册", "height": 40 } }] };
            return loginUI;
        }(View));
        UI.loginUI = loginUI;
    })(UI = ui.UI || (ui.UI = {}));
})(ui || (ui = {}));
(function (ui) {
    var UI;
    (function (UI) {
        var paihangUI = /** @class */ (function (_super) {
            __extends(paihangUI, _super);
            function paihangUI() {
                return _super.call(this) || this;
            }
            paihangUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.UI.paihangUI.uiView);
            };
            paihangUI.uiView = { "type": "View", "props": { "width": 640, "height": 1130 }, "child": [{ "type": "Image", "props": { "y": 315, "x": 95, "width": 450, "skin": "ui/sigin/bg_jewel.png", "sizeGrid": "20,20,20,20", "renderType": "render", "height": 500 }, "child": [{ "type": "Text", "props": { "y": 15, "x": 0, "width": 450, "valign": "middle", "text": "步数排行榜", "height": 40, "fontSize": 36, "font": "Microsoft YaHei", "color": "#030303", "bold": true, "align": "center" } }, { "type": "Text", "props": { "y": 80, "x": 0, "width": 450, "valign": "middle", "text": "名次                昵称                  步数", "height": 40, "fontSize": 26, "font": "Microsoft YaHei", "color": "#0a0202", "align": "center" } }] }, { "type": "ViewStack", "props": { "y": 429, "x": 110, "var": "stack", "selectedIndex": 0 }, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 416, "var": "paihang", "repeatY": 0, "repeatX": 1, "name": "item0", "height": 352 }, "child": [{ "type": "Box", "props": { "renderType": "render", "name": "render" }, "child": [{ "type": "Text", "props": { "width": 51, "var": "mici", "valign": "middle", "text": "1", "height": 40, "fontSize": 26, "font": "Microsoft YaHei", "color": "#0a0202", "align": "center" } }, { "type": "Text", "props": { "x": 174, "width": 51, "var": "mizi", "valign": "middle", "text": "aaa", "height": 40, "fontSize": 26, "font": "Microsoft YaHei", "color": "#0a0202", "align": "center" } }, { "type": "Text", "props": { "x": 365, "width": 51, "var": "bushu", "valign": "middle", "text": "1", "height": 40, "fontSize": 26, "font": "Microsoft YaHei", "color": "#0a0202", "align": "center" } }] }] }, { "type": "List", "props": { "y": 0, "x": 0, "width": 416, "var": "paihang1", "repeatY": 0, "repeatX": 1, "name": "item1", "height": 352 }, "child": [{ "type": "Box", "props": { "renderType": "render", "name": "render" }, "child": [{ "type": "Text", "props": { "width": 51, "valign": "middle", "text": "1", "height": 40, "fontSize": 26, "font": "Microsoft YaHei", "color": "#0a0202", "align": "center" } }, { "type": "Text", "props": { "x": 174, "width": 51, "valign": "middle", "text": "aaa", "height": 40, "fontSize": 26, "font": "Microsoft YaHei", "color": "#0a0202", "align": "center" } }, { "type": "Text", "props": { "x": 365, "width": 51, "valign": "middle", "text": "1", "height": 40, "fontSize": 26, "font": "Microsoft YaHei", "color": "#0a0202", "align": "center" } }] }] }, { "type": "List", "props": { "y": 0, "x": 0, "width": 416, "var": "paihang2", "repeatY": 0, "repeatX": 1, "name": "item2", "height": 352 }, "child": [{ "type": "Box", "props": { "renderType": "render", "name": "render" }, "child": [{ "type": "Text", "props": { "width": 51, "valign": "middle", "text": "1", "height": 40, "fontSize": 26, "font": "Microsoft YaHei", "color": "#0a0202", "align": "center" } }, { "type": "Text", "props": { "x": 174, "width": 51, "valign": "middle", "text": "aaa", "height": 40, "fontSize": 26, "font": "Microsoft YaHei", "color": "#0a0202", "align": "center" } }, { "type": "Text", "props": { "x": 365, "width": 51, "valign": "middle", "text": "1", "height": 40, "fontSize": 26, "font": "Microsoft YaHei", "color": "#0a0202", "align": "center" } }] }] }] }, { "type": "Tab", "props": { "y": 291, "x": 111, "width": 450, "var": "tab", "stateNum": 2, "space": 80, "skin": "ui/tool/gj_sbg2.png", "selectedIndex": 0, "pivotY": 25, "pivotX": 16, "labels": "第一关,第二关,第三关", "labelSize": 20, "labelFont": "Microsoft YaHei", "labelBold": true, "height": 100 } }, { "type": "Button", "props": { "y": 319, "x": 487, "width": 55, "var": "btn_close", "stateNum": 1, "skin": "ui/goldman/btn_off.png", "height": 55 } }] };
            return paihangUI;
        }(View));
        UI.paihangUI = paihangUI;
    })(UI = ui.UI || (ui.UI = {}));
})(ui || (ui = {}));
(function (ui) {
    var UI;
    (function (UI) {
        var resultUI = /** @class */ (function (_super) {
            __extends(resultUI, _super);
            function resultUI() {
                return _super.call(this) || this;
            }
            resultUI.prototype.createChildren = function () {
                View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.UI.resultUI.uiView);
            };
            resultUI.uiView = { "type": "View", "props": { "width": 640, "height": 1130 }, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 650, "var": "bg", "height": 1200, "alpha": 0.6 } }, { "type": "Image", "props": { "y": 267, "x": 20, "width": 600, "skin": "ui/roulette/bg_2.png", "height": 600 }, "child": [{ "type": "Text", "props": { "y": 55, "x": 197, "width": 205, "var": "resulttext", "text": "游戏胜利", "italic": true, "height": 60, "fontSize": 50, "color": "#050505", "bold": true, "align": "center" } }, { "type": "Button", "props": { "y": 483, "x": 221, "var": "queding", "skin": "ui/btn/btn_det.png" } }, { "type": "Image", "props": { "y": 141, "x": 164, "var": "win", "skin": "ui/bounced/img_rectangle.png" } }, { "type": "Image", "props": { "y": 133, "x": 171, "var": "loser", "skin": "home/fail.png" } }, { "type": "Image", "props": { "y": 61, "x": 129, "var": "gameover", "skin": "home/gameovertitle.png" } }] }] };
            return resultUI;
        }(View));
        UI.resultUI = resultUI;
    })(UI = ui.UI || (ui.UI = {}));
})(ui || (ui = {}));
(function (ui) {
    var UI;
    (function (UI) {
        var selectUI = /** @class */ (function (_super) {
            __extends(selectUI, _super);
            function selectUI() {
                return _super.call(this) || this;
            }
            selectUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.UI.selectUI.uiView);
            };
            selectUI.uiView = { "type": "View", "props": { "width": 640, "height": 1130 }, "child": [{ "type": "Button", "props": { "y": 350, "x": 169, "width": 302, "var": "first", "stateNum": 1, "skin": "ui/sigin/bg_quan.png", "sizeGrid": "9,7,9,7", "pivotY": 0.5, "pivotX": 0.5, "labelStroke": 2, "labelSize": 46, "labelFont": "Microsoft YaHei", "labelColors": "red", "labelBold": false, "labelAlign": "center", "label": "关卡1", "height": 126 } }, { "type": "Button", "props": { "y": 600, "x": 169, "width": 302, "var": "second", "stateNum": 1, "skin": "ui/sigin/bg_quan.png", "sizeGrid": "9,7,9,7", "pivotY": 0.5, "pivotX": 0.5, "labelStroke": 2, "labelSize": 46, "labelFont": "Microsoft YaHei", "labelColors": "red", "labelBold": false, "labelAlign": "center", "label": "关卡2", "height": 126 } }, { "type": "Button", "props": { "y": 850, "x": 169, "width": 302, "var": "third", "stateNum": 1, "skin": "ui/sigin/bg_quan.png", "sizeGrid": "9,7,9,7", "pivotY": 0.5, "pivotX": 0.5, "labelStroke": 2, "labelSize": 46, "labelFont": "Microsoft YaHei", "labelColors": "red", "labelBold": false, "labelAlign": "center", "label": "关卡3", "height": 126 } }] };
            return selectUI;
        }(View));
        UI.selectUI = selectUI;
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
            UITestUI.uiView = { "type": "View", "props": { "width": 400, "height": 600 }, "child": [{ "type": "Image", "props": { "y": 143, "x": 130, "width": 178, "skin": "home/type15.png", "pivotY": 2, "pivotX": 2, "height": 214 } }, { "type": "Label", "props": { "y": 210, "x": 169, "width": 95, "text": "label", "height": 51, "fontSize": 50, "color": "#d43835" } }] };
            return UITestUI;
        }(View));
        UI.UITestUI = UITestUI;
    })(UI = ui.UI || (ui.UI = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map