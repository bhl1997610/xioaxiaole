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
/**
 * 下方道具界面
 */
var PropView = /** @class */ (function (_super) {
    __extends(PropView, _super);
    function PropView(type) {
        var _this = _super.call(this) || this;
        _this._type = -1; //道具类型
        _this.id = -1;
        _this._num = 0; //数量
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
        this.addChild(this._view_box);
        this.addChild(this._numText);
        this.setActivateState(true);
    };
    //创建道具盒子并设置位置
    PropView.prototype.createNumText = function () {
        this._numText = new Laya.Label();
        this._numText.x = this._view_active.width - 31;
    };
    PropView.prototype.createView = function () {
        var _interval = 15; //道具之间的间距
        var _width = (GameData.stageW - _interval * 6) / 5; //每个道具的宽度
        if (!this._view_active) {
            this._view_active = new Laya.Sprite();
            this._view_active.loadImage(this.getActivateTexture(this._type));
            console.log(this.getActivateTexture(this._type));
            this._view_active.width = _width = this._view_active.height;
        }
        if (!this._view_box) {
            this._view_box = new Laya.Sprite();
            this._view_box.loadImage("home/zhadan.png");
            this._view_box.width = this._view_box.height = this._view_active.width + 10;
            this._view_box.x = 0;
            this._view_box.y = 0;
        }
    };
    Object.defineProperty(PropView.prototype, "num", {
        get: function () {
            return this._num;
        },
        set: function (val) {
            this._num = val;
            this._numText.text = val.toString();
            if (val <= 0) {
                this.setActivateState(false);
            }
            else {
                this.setActivateState(true);
            }
        },
        enumerable: true,
        configurable: true
    });
    PropView.prototype.getFocusTexture = function (type) {
        var textureName = "";
        switch (type) {
            case 0:
                textureName = "home/tongseactive.png";
                break;
            case 1:
                textureName = "home/zhadanactive.png";
                break;
            case 2:
                textureName = "home/zhenghangactive.png";
                break;
            case 3:
                textureName = "home/zhenglieactive.png";
                break;
            case 4:
                textureName = "home/chanziactive.png";
                break;
        }
        return textureName;
    };
    PropView.prototype.getActivateTexture = function (type) {
        var textureName = "";
        switch (type) {
            case 0:
                textureName = "home/tongse.png";
                break;
            case 1:
                textureName = "home/zhadan.png";
                break;
            case 2:
                textureName = "home/zhenghang.png";
                break;
            case 3:
                textureName = "home/zhenglie.png";
                break;
            case 4:
                textureName = "home/chanzi.png";
                break;
        }
        return textureName;
    };
    PropView.prototype.getDisableTexture = function (type) {
        var textureName = "";
        switch (type) {
            case 0:
                textureName = "home/tongsedisable.png";
                break;
            case 1:
                textureName = "home/zhadandisable.png";
                break;
            case 2:
                textureName = "home/zhenghangdisable.png";
                break;
            case 3:
                textureName = "home/zhengliedisable.png";
                break;
            case 4:
                textureName = "home/chanzidisable.png";
                break;
        }
        return textureName;
    };
    PropView.prototype.setActivateState = function (val) {
        // this.touchEnabled = val;
        if (val) {
            // this._view_active.texture = RES.getRes(this.getActivateTexture(this._type));
            this._view_active.loadImage(this.getActivateTexture(this._type));
            // this._numText.font = RES.getRes("number_fnt");
            // this._view_box.texture = RES.getRes("propbox_png");
            this._view_box.loadImage("home/zhadan.png");
        }
        else {
            // this._view_active.texture = RES.getRes(this.getDisableTexture(this._type));
            this._view_active.loadImage(this.getDisableTexture(this._type));
            // this._numText.font = RES.getRes("numberdisable_fnt");
            //  this._view_box.texture = RES.getRes("propboxdisable_png");
            this._view_box.loadImage("home/zhadan.png");
        }
    };
    PropView.prototype.setFocus = function (val) {
        if (val) {
            //this._view_active.texture = RES.getRes(this.getFocusTexture(this._type));
        }
        else {
            if (this._num > 0) {
                //this._view_active.texture = RES.getRes(this.getActivateTexture(this._type));
            }
            else {
                //this._view_active.texture = RES.getRes(this.getDisableTexture(this._type));
            }
        }
    };
    return PropView;
}(Laya.Sprite));
//# sourceMappingURL=PropView.js.map