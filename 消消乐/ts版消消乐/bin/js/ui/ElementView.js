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

 *
 */
var ElementView = /** @class */ (function (_super) {
    __extends(ElementView, _super);
    //游戏中的元素
    function ElementView(tParent) {
        var _this = _super.call(this) || this;
        _this.location = 0; //位置编号，用于提供移动使用
        /*-----------------------------ID 编号相关，携带测试信息-----------------------------------*/
        _this._id = -1; //ID编号，对应GameData.elements中的数据ID，与数据下标相同
        /*-------------------------------------焦点管理相关----------------------------------------*/
        _this._focus = false;
        /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
        /*-----------------------------------移动到新位置，乱序操作使用-----------------------------------------*/
        _this.speed = 200;
        _this.thisParent = tParent;
        _this.init();
        return _this;
    }
    Object.defineProperty(ElementView.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化所有数据
     */
    ElementView.prototype.init = function () {
        this.bitmap = new Laya.Image();
        this.mouseEnabled = true;
        var bitWidth = (GameData.stageW - 40) / GameData.MaxColumn;
        this.bitmap.width = bitWidth - 10;
        this.bitmap.height = bitWidth - 10;
        this.bitmap.pivotX = 0.5;
        this.bitmap.pivotY = 0.5;
        this.addChild(this.bitmap);
    };
    /**
     * 设置贴图
     */
    ElementView.prototype.setTexture = function (val) {
        this.bitmap.skin = val;
    };
    Object.defineProperty(ElementView.prototype, "focus", {
        get: function () {
            return this._focus;
        },
        enumerable: true,
        configurable: true
    });
    //设置选中状态的焦点样式
    ElementView.prototype.setFocus = function (val) {
        // if(val!=this.focus){ 
        this._focus = val;
        if (val) {
            this.setTexture("home/" + "e" + GameData.elements[this.id].type + "foucs.png");
        }
        else {
            this.setTexture("home/" + "e" + GameData.elements[this.id].type + ".png");
        }
        // }
    };
    //移动到新位置,使用cubicInOut算法移动，直线运动
    ElementView.prototype.move = function () {
        Laya.Tween.to(this.thisParent, { x: this.targetX(), y: this.targetY() }, this.speed, Laya.Ease.bounceInOut, Laya.Handler.create(this, function () {
        }));
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /*-------------------------------------显示元素，从上方掉落----------------------------------------*/
    /*-------------------------------------掉落后添加到父级别显示列表-----------------------------------*/
    ElementView.prototype.show = function (wait) {
        Laya.Tween.to(this, { x: this.targetX(), y: this.targetY() }, this.speed, Laya.Ease.bounceOut, Laya.Handler.create(this, this.addThisToParent));
    };
    ElementView.prototype.addThisToParent = function () {
        if (!this.parent) {
            this.thisParent.addChild(this);
        }
    };
    //设置元素的坐标位置   根据元素的loacation  设置元素的 x轴位置。
    ElementView.prototype.targetX = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxColumn - 10; //单个网格宽度
        var xx = 20 + girdWidth * (this.location % GameData.MaxColumn) + girdWidth / 2;
        return xx;
    };
    ElementView.prototype.targetY = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxColumn - 10;
        var startY = (GameData.stageH - (GameData.stageW - 30) / 6 - 60) - girdWidth * GameData.MaxColumn;
        // console.log(startY + "元素的开始排列位置。。。。。。")
        var yy = startY + girdWidth * (Math.floor(this.location / GameData.MaxColumn)) + girdWidth / 2;
        return yy;
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /*--------------------------------------移动并且返回-------------------------------------*/
    /*----------------------用于用户交换两个对象，但未找到能够连接消除的时候使用------------------------*/
    //移动到另外一个位置，然后再移动回来
    ElementView.prototype.moveAndBack = function (location, isScale) {
        if (isScale === void 0) { isScale = false; }
        var girdWidth = (GameData.stageW - 40) / GameData.MaxColumn - 10;
        var xx = girdWidth * (location % GameData.MaxColumn) + girdWidth / 2 + 5;
        var startY = (GameData.stageH - (GameData.stageW - 30) / 6 - 60) - girdWidth * GameData.MaxColumn;
        var yy = startY + girdWidth * (Math.floor(location / GameData.MaxColumn)) + girdWidth / 2 - 10;
        //移动时候，不仅会移动位置，还会放大或者缩小，移动回来时，scale都设置为1 
        if (isScale) {
            Laya.Tween.to(this, { x: xx, y: yy, scaleX: 1.2, scaleY: 1.2 }, 300, Laya.Ease.cubicOut, Laya.Handler.create(this, this.back));
        }
        else {
            Laya.Tween.to(this, { x: xx, y: yy, scaleX: 0.8, scaleY: 0.8 }, 300, Laya.Ease.cubicOut, Laya.Handler.create(this, this.back));
        }
    };
    ElementView.prototype.back = function () {
        Laya.Tween.to(this, { x: this.targetX(), y: this.targetY(), scaleX: 1, scaleY: 1 }, 300, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {
            GameData.stopclick = false;
        }));
    };
    /*-----------------------------移动元素====消除元素--------------------------------------*/
    ElementView.prototype.moveAndScale = function (location, isScale) {
        if (isScale === void 0) { isScale = false; }
        var girdWidth = (GameData.stageW - 40) / GameData.MaxColumn - 10;
        var xx = girdWidth * (location % GameData.MaxColumn) + girdWidth / 2 + 15;
        var startY = (GameData.stageH - (GameData.stageW - 30) / 6 - 60) - girdWidth * GameData.MaxColumn;
        var yy = startY + girdWidth * (Math.floor(location / GameData.MaxRow)) + girdWidth / 2 - 10;
        if (isScale) { //第一个元素
            Laya.Tween.to(this, { x: xx, y: yy, scaleX: 1.4, scaleY: 1.4 }, 300, Laya.Ease.cubicInOut, Laya.Handler.create(this, this.backScaleNoCall));
        }
        else { //第二个元素
            Laya.Tween.to(this, { x: xx, y: yy, scaleX: 0.3, scaleY: 0.3 }, 300, Laya.Ease.cubicInOut, Laya.Handler.create(this, this.backScale));
        }
    };
    ElementView.prototype.backScale = function () {
        Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut, Laya.Handler.create(this, this.canRemove));
    };
    ElementView.prototype.backScaleNoCall = function () {
        Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut, Laya.Handler.create(this, function () {
        }));
    };
    ElementView.prototype.canRemove = function () {
        var evt = new ElementViewManageEvent(ElementViewManageEvent.REMOVE_ANIMATION_OVER);
        var hv = ui.select.self.uiManager.getUI(UIType.homeView);
        hv.evm.event(ElementViewManageEvent.REMOVE_ANIMATION_OVER, evt);
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /*-----------------此动画用于将元素移动到关卡积分器位置,然后移除显示列表----------------------------*/
    /*-------------------------删除元素，当元素不属于关卡条件时，执行此动画---------------------------------*/
    //播放直接消除动画,自己放大，然后缩回到原有大小，然后删除
    ElementView.prototype.playRemoveAni = function () {
        Laya.Tween.to(this, { scaleX: 0.1, scaleY: 0.1 }, 300, Laya.Ease.cubicInOut, Laya.Handler.create(this, this.removeAniCall));
    };
    ElementView.prototype.removeAniCall = function () {
        if (this.parent) {
            this.parent.removeChild(this); //删除元素
        }
        var evt = new ElementViewManageEvent(ElementViewManageEvent.UPDATE_MAP);
        var hv = ui.select.self.uiManager.getUI(UIType.homeView);
        hv.evm.updateMap(evt);
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    /*-------------------------移动到新位置，方块被消除后重新生成下落使用---------------------------------*/
    /**
     * 播放曲线动画
     */
    ElementView.prototype.playCurveMove = function (tx, ty) {
        Laya.Tween.to(this, { x: tx, y: ty }, 700, Laya.Ease.quadOut, Laya.Handler.create(this, this.overCurveMove));
    };
    ElementView.prototype.overCurveMove = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        var evt = new ElementViewManageEvent(ElementViewManageEvent.UPDATE_MAP);
        var hv = ui.select.self.uiManager.getUI(UIType.homeView);
        hv.evm.updateMap(evt);
    };
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    //根据列编号，重新计算元素X轴位置，从起始Y轴开始播放下落动画
    ElementView.prototype.moveNewLocation = function () {
        if (!this.parent) {
            var girdWidth = (GameData.stageW - 40) / GameData.MaxColumn;
            var startY = (GameData.stageH - (GameData.stageW - 30) / 6 - 60) - girdWidth * GameData.MaxColumn;
            this.y = startY - this.width;
            this.scaleX = 1;
            this.scaleY = 1;
            this.x = this.targetX();
            //被删除的元素要重新加入
            this.thisParent.addChild(this);
        }
        Laya.Tween.to(this, { x: this.targetX(), y: this.targetY() }, this.speed, Laya.Ease.bounceOut, Laya.Handler.create(this, this.moveNewLocationOver));
    };
    ElementView.prototype.moveNewLocationOver = function () {
        var evt = new ElementViewManageEvent(ElementViewManageEvent.UPDATE_VIEW_OVER);
        var hv = ui.select.self.uiManager.getUI(UIType.homeView);
        hv.evm.moveNewLocationOver(evt);
    };
    return ElementView;
}(Laya.Sprite));
//# sourceMappingURL=ElementView.js.map