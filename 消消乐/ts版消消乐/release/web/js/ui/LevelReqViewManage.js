var LevelReqViewManage = /** @class */ (function () {
    function LevelReqViewManage(layer) {
        this._layer = layer;
        this.init();
    }
    LevelReqViewManage.prototype.init = function () {
        this.elements = new Array();
    };
    /**
     * 创建当前关卡的过关条件元素
     */
    LevelReqViewManage.prototype.createCurrentLevelReq = function () {
        var len = GameData.levelReq.getLevelReqNum();
        var el;
        for (var i = 0; i < len; i++) {
            if (this.elements.length <= i) {
                el = new LevelElementView();
                this.elements.push(el);
            }
            else {
                el = this.elements[i];
            }
            el.eltype = GameData.levelReq.reqElements[i].type;
            el.setTexture("home/" + "e" + el.eltype + ".png");
            el.width = 80;
            el.x = 43 + (5 + el.width) * i;
            el.y = 95;
            el.num = GameData.levelReq.reqElements[i].num;
            this._layer.addChild(el);
        }
        //   剩余步数
        if (!this.stepNumText) {
            this.stepNumText = new Laya.Text();
            this.stepNumText.x = GameData.stageW - 110;
            this.stepNumText.fontSize = 30;
            this.stepNumText.y = 80;
            this.stepNumText.scaleX = 1.5;
            this.stepNumText.scaleY = 1.5;
            this._layer.addChild(this.stepNumText);
            this.stepNumText.text = GameData.stepNum.toString();
        }
    };
    /**
     * 判断是否有指定类型
     * */
    LevelReqViewManage.prototype.haveReqType = function (type) {
        var l = this.elements.length;
        for (var i = 0; i < l; i++) {
            if (this.elements[i].eltype == type) {
                return true;
            }
        }
        return false;
    };
    /**
     * 更新步数信息
     */
    LevelReqViewManage.prototype.updateStep = function () {
        this.stepNumText.text = GameData.stepNum.toString();
    };
    /**
     * 通过类型，获取当前元素再视图中的位置信息
     */
    LevelReqViewManage.prototype.getPointByType = function (type) {
        var p = new Laya.Point();
        var len = this.elements.length;
        for (var i = 0; i < len; i++) {
            if (this.elements[i].eltype == type) {
                p.x = this.elements[i].x + this.elements[i].width / 2;
                p.y = this.elements[i].y + this.elements[i].height / 2;
            }
        }
        return p;
    };
    /**
     * 更新数据
     */
    LevelReqViewManage.prototype.update = function () {
        console.log("更新关卡数量数据");
        var len = GameData.levelReq.getLevelReqNum();
        for (var i = 0; i < len; i++) {
            this.elements[i].num = GameData.levelReq.reqElements[i].num;
        }
    };
    return LevelReqViewManage;
}());
//# sourceMappingURL=LevelReqViewManage.js.map