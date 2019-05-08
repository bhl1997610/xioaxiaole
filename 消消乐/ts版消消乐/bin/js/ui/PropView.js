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
/**
 * 下方道具界面
 */
var PropView = /** @class */ (function (_super) {
    __extends(PropView, _super);
    function PropView(type) {
        var _this = _super.call(this) || this;
        _this._type = -1; //道具类型
        _this.id = -1;
        _this.first = 1;
        _this._type = type;
        _this.init();
        return _this;
    }
    Object.defineProperty(PropView.prototype, "proptype", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    PropView.prototype.init = function () {
        this.createView();
        this.createNumText();
        this.addChild(this._view_active);
        this.addChild(this._numText);
    };
    //创建道具盒子并设置位置
    PropView.prototype.createNumText = function () {
        this._numText = new Laya.Label();
        this._numText.x = this._view_active.width + 20;
        this._numText.y = 40;
        this._numText.fontSize = 40;
        this._numText.changeText("1");
    };
    PropView.prototype.createView = function () {
        if (!this._view_active) {
            this._view_active = new Laya.Image();
            this._view_active.skin = this.getActivateTexture(this._type);
            this._view_active["type"] = this._type;
            this._view_active.width = this._view_active.height = 100;
            this._view_active.pivot(this._view_active.width / 2, this._view_active.height / 2);
            console.log(this.getActivateTexture(this._type));
            this._view_active.on(Laya.Event.CLICK, this, this.click);
        }
    };
    PropView.prototype.click = function () {
        if (this.first == 1) {
            this._view_active.scale(0.8, 0.8);
            this._view_active.skin = this.getFocusTexture(this._view_active["type"]);
            this.first = 0;
        }
        else {
            this._view_active.scale(1, 1);
            this._view_active.skin = this.getActivateTexture(this._view_active["type"]);
            this.first = 1;
        }
    };
    PropView.prototype.getFocusTexture = function (type) {
        var textureName = "";
        switch (type) {
            case 0:
                textureName = "home/zhenghangactive.png";
                break;
            case 1:
                textureName = "home/zhenglieactive.png";
                break;
        }
        return textureName;
    };
    PropView.prototype.getActivateTexture = function (type) {
        var textureName = "";
        switch (type) {
            case 0:
                textureName = "home/zhenghang.png";
                break;
            case 1:
                textureName = "home/zhenglie.png";
                break;
        }
        return textureName;
    };
    PropView.prototype.getDisableTexture = function (type) {
        var textureName = "";
        switch (type) {
            case 0:
                textureName = "home/zhenghangactive.png";
                break;
            case 1:
                textureName = "home/zhenglieactive.png";
                break;
        }
        return textureName;
    };
    return PropView;
}(Laya.Sprite));
//# sourceMappingURL=PropView.js.map