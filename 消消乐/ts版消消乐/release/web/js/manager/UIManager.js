/*
* UI管理器;
*/
var UIManager = /** @class */ (function () {
    function UIManager() {
        this.openArray = [];
        this.hideArray = [];
    }
    UIManager.prototype.openUI = function (type, obj, call) {
        var hide = false;
        var ui;
        var index;
        for (var i = 0; i < this.hideArray.length; i++) {
            //如果是隐藏的UI，显示UI
            if (this.hideArray[i].type == type) {
                index = i;
                hide = true;
                ui = this.hideArray[i];
                break;
            }
        }
        if (hide) {
            this.hideArray.splice(index, 1);
            this.openArray.push(ui);
        }
        else {
            for (var i = 0; i < this.openArray.length; i++) {
                //如果已经打开，刷新还是不响应看需求
                if (this.openArray[i].type == type)
                    return;
            }
            try {
                //将uitype的string和类名关联
                ui = eval("new " + UIType[type] + "()");
            }
            catch (e) {
                console.log(e);
                return;
            }
        }
        //打开UI
        ui.open(obj, new Laya.Handler(this, this.onOpen, [ui, call]));
        this.openArray.push(ui);
    };
    UIManager.prototype.onOpen = function (ui, call) {
        Laya.stage.addChild(ui);
        ui.visible = true;
        ui.show();
        if (call)
            call.run();
    };
    //获取已经打开的UI
    UIManager.prototype.getUI = function (type) {
        for (var i = 0; i < this.openArray.length; i++) {
            if (this.openArray[i].type == type)
                return this.openArray[i];
        }
        return null;
    };
    UIManager.prototype.hideUI = function (type) {
        var ui = null;
        var index;
        for (var i = 0; i < this.openArray.length; i++) {
            if (this.openArray[i].type == type) {
                ui = this.openArray[i];
                index = i;
            }
        }
        if (ui) {
            this.openArray.splice(index, 1);
            this.hideArray.push(ui);
        }
    };
    return UIManager;
}());
var UIType;
(function (UIType) {
    UIType[UIType["UITest"] = 0] = "UITest";
    UIType[UIType["homeView"] = 1] = "homeView";
    UIType[UIType["Level"] = 2] = "Level";
    UIType[UIType["Login"] = 3] = "Login";
    UIType[UIType["ElementView"] = 4] = "ElementView";
})(UIType || (UIType = {}));
//# sourceMappingURL=UIManager.js.map