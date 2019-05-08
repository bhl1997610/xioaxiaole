/**
 * 关卡数据解析类
 */
var LevelGameDataParse = /** @class */ (function () {
    function LevelGameDataParse() {
    }
    LevelGameDataParse.parseLevelGameData = function (val) {
        GameData.stepNum = val.step;
        GameData.levelStepNum = val.step;
        GameData.elementType = val.element;
        GameData.levelbgNum = val.levelgbimg;
        LevelGameDataParse.parseLevelReq(val.levelreq);
    };
    LevelGameDataParse.parseLevelReq = function (val) {
        GameData.levelreq.openChange();
        var len = val.length;
        for (var i = 0; i < len; i++) {
            GameData.levelreq.addElement(val[i].type, val[i].num);
        }
    };
    return LevelGameDataParse;
}());
//# sourceMappingURL=LevelGameParse.js.map