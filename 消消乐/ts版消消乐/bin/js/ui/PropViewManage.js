var PropViewManage = /** @class */ (function () {
    function PropViewManage(root) {
        this._layer = root;
        this.init();
    }
    PropViewManage.prototype.init = function () {
        this._props = new Array();
        this.testdata();
    };
    /**
     * (测试)随机生成 道具 数量
     */
    PropViewManage.prototype.testdata = function () {
        for (var i = 0; i < 2; i++) {
            var prop = new PropView(i);
            prop.x = 50 + (400) * i;
            //console.log("道具宽度",prop.width);
            prop.y = 1050;
            this._layer.addChild(prop);
            this._props.push(prop);
            prop.id = i;
        }
    };
    /**
     * 使用道具
     */
    PropViewManage.prototype.useProp = function () {
    };
    PropViewManage.propType = -1; //道具类型
    return PropViewManage;
}());
//# sourceMappingURL=PropViewManage.js.map