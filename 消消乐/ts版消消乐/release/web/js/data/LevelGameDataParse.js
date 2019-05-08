var LevelGameDataParse = /** @class */ (function () {
    function LevelGameDataParse() {
    }
    /**
     * 针对当前关卡JSON数据，进行解析
     */
    LevelGameDataParse.parseLevelGameData = function (val) {
        GameData.stepNum = val.step; //玩家剩余步数。
        GameData.levelStepNum = val.step; //当前关卡步数。
        GameData.elementTypes = val.element;
        GameData.levelBackgroundImageName = val.levelbgimg;
        LevelGameDataParse.parseLevelReq(val.levelreq);
    };
    /**
     *将过关需要消除的元素类型和数量赋值给gameData
     */
    LevelGameDataParse.parseLevelReq = function (val) {
        GameData.levelReq.openChange();
        var len = val.length;
        for (var i = 0; i < len; i++) {
            GameData.levelReq.addElements(val[i].type, val[i].num);
        }
    };
    return LevelGameDataParse;
}());
//# sourceMappingURL=LevelGameDataParse.js.map