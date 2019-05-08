/*
* 工具类(繁杂方法);
*/
var Tool = /** @class */ (function () {
    function Tool() {
    }
    // 确保val介于min和max之间
    Tool.getRangedValue = function (val, min, max) {
        if (val < min)
            return min;
        else if (val > max)
            return max;
        else
            return val;
    };
    // 返回[min, max)之间的随机数
    Tool.randNum = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    //一些工具接口
    Tool.goToURL = function (url) {
        window.location.href = url;
    };
    return Tool;
}());
//# sourceMappingURL=Tool.js.map