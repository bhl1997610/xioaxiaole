var MapDataParse = /** @class */ (function () {
    function MapDataParse() {
    }
    /**
     * 根据外部加载的数据来创建地图数据,数组中存放着无法放置内容得区域，该区域数值均为-1
     * 设置不显示的地图
     * 设置雪块
     */
    MapDataParse.createMapData = function (val) {
        var len = val.length;
        GameData.unmapnum = len;
        var index = 0;
        for (var i = 0; i < len; i++) {
            index = val[i];
            GameData.mapData[Math.floor(index / GameData.MaxColumn)][index % GameData.MaxRow] = -1;
            // GameData.mapData[2][1] = -1;
        }
        //当前关卡地图中可用元素的数量
        // GameData.currentElementNum = GameData.MaxColumn * GameData.MaxRow -len;
        // console.log(GameData.mapData);
    };
    return MapDataParse;
}());
//# sourceMappingURL=MapDataParse.js.map