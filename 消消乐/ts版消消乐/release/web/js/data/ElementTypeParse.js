/**
 * 元素类型解析类
 * 当前关卡出现的元素类型
 */
var ElementTypeParse = /** @class */ (function () {
    function ElementTypeParse() {
    }
    //传入元素类型的数组。赋值给gamedata类中的元素类型
    ElementTypeParse.creatElementTypeData = function (val) {
        GameData.elementTypes = val;
    };
    return ElementTypeParse;
}());
//# sourceMappingURL=ElementTypeParse.js.map