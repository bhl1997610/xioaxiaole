// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.ROBOT_DATA_PATH = "res/data/l1.json";
        this.ROBOT_TEXTURE_PATH = "res/atlas/home.atlas";
        this.ROBOT_IMG_PATH = "res/atlas/home.png";
        //初始化引擎
        Laya.init(750, 1200, Laya.WebGL);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "center";
        Laya.stage.bgColor = "#999999";
        Laya.stage.frameRate = Laya.Stage.FRAME_MOUSE;
        GameMain.Instance = this;
        // 适配器
        this.uiManager = new UIManager();
        // this.MapData.name = "MainGame";
        //获取数据(用户数据，配置数据解析);
        // TODO:xxx asdasdasdasdasdasd
        //资源图集预加载
        //TODO
        var resArray = [];
        resArray.push({ url: this.ROBOT_DATA_PATH, type: Laya.Loader.JSON });
        resArray.push({ url: this.ROBOT_TEXTURE_PATH, type: Laya.Loader.ATLAS });
        resArray.push({ url: this.ROBOT_IMG_PATH, type: Laya.Loader.IMAGE });
        //  需要loading界面的话就在此函数增加一个回调函数
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onloaded));
    }
    GameMain.prototype.onloaded = function () {
        var json = Laya.loader.getRes(this.ROBOT_DATA_PATH);
        this.uiManager.openUI(UIType.homeView, null, null);
        ///外部举例调用数据
        ///GameMain.Instance.userData
        ///外部举例调用UImanager
        ///GameMain.Instance.uiManager
        // 创建添加主逻辑控制类
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map