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
var GameBackGround = /** @class */ (function (_super) {
    __extends(GameBackGround, _super);
    function GameBackGround() {
        return _super.call(this) || this;
    }
    GameBackGround.prototype.changeBackground = function () {
        this.cacheAsBitmap = false; //是否缓存为静态图像
        this.removeChildren();
        this.createBackGroundImage();
        this.createMapBg();
        this.createLevelReqBg();
        this.createStepBg();
        this.cacheAsBitmap = true;
    };
    /**
     * 创建地图背景图片
     */
    GameBackGround.prototype.createBackGroundImage = function () {
        if (!this.bgImage) {
            this.bgImage = new Laya.Image();
        }
        this.bgImage.loadImage(GameData.levelBackgroundImageName);
        this.bgImage.width = GameData.stageW;
        this.bgImage.height = GameData.stageH;
        this.addChild(this.bgImage);
        console.log("添加关卡背景图片");
        //道具背景图
        // let propbg:Laya.Image =new Laya.Image();
        // propbg.loadImage("home/levelregbg.png");
        // propbg.width = GameData.stageW;
        // propbg.height = GameData.stageW/5 + 20;
        // propbg.y = GameData.stageH - propbg.height;	
        // this.addChild(propbg);  //道具背景图片
    };
    /**
     * 创建地图背景图片的格子图
     */
    GameBackGround.prototype.createMapBg = function () {
        if (!this.girdBg) {
            this.girdBg = new Array();
        }
        var gird;
        var girdWidth = (GameData.stageW - 40) / GameData.MaxColumn - 10;
        var startY = (GameData.stageH - (GameData.stageW - 30) / 6 - 60) - girdWidth * GameData.MaxColumn;
        for (var i = 0; i < GameData.MaxRow; i++) {
            for (var t = 0; t < GameData.MaxColumn; t++) {
                if (GameData.mapData[i][t] != -1) {
                    if (this.girdBg.length <= (i * GameData.MaxRow + t)) {
                        gird = new Laya.Image();
                        this.girdBg.push(gird);
                    }
                    else {
                        gird = this.girdBg[i * GameData.MaxRow + t];
                    }
                    gird.width = girdWidth;
                    gird.height = girdWidth;
                    gird.x = 20 + girdWidth * t;
                    gird.y = startY + girdWidth * i;
                    if ((i % 2 == 0 && t % 2 == 0) || (i % 2 == 1 && t % 2 == 1)) {
                        gird.loadImage("home/elementbg1.png");
                    }
                    else {
                        gird.loadImage("home/elementbg2.png");
                    }
                    this.addChild(gird);
                }
            }
        }
    };
    /**
     * 创建关卡 过关条件背景图片
     */
    GameBackGround.prototype.createLevelReqBg = function () {
        var girdWidth = (GameData.stageW - 40) / GameData.MaxColumn; //每个网格宽度
        var bg = new Laya.Image();
        bg.loadImage("home/levelregbg.png");
        bg.width = GameData.levelReq.getLevelReqNum() * (10 + girdWidth) + 20;
        bg.height = girdWidth + 60;
        bg.x = 20;
        bg.y = 50;
        // this.addChild(bg);
        // let bgtxt:Laya.Image = new Laya.Image();
        // bgtxt.loadImage("home/levelregbg.png");
        // bgtxt.x = bg.x +(bg.width-bgtxt.width)/2;
        // bgtxt.y=bg.y-18;
        // this.addChild(bgtxt);
    };
    /**
     * 剩余步数背景
     */
    GameBackGround.prototype.createStepBg = function () {
        var bg = new Laya.Image();
        bg.loadImage("home/levelregbg.png");
        bg.width = 100;
        bg.height = 100;
        bg.x = GameData.stageW - 126;
        bg.y = 50;
        this.addChild(bg);
        // var bgtxt:Laya.Image = new Laya.Image();
        // bgtxt.loadImage("home/sursteptitle.png");
        // bgtxt.x = bg.x + (bg.width - bgtxt.width)/2;
        // bgtxt.y = bg.y + 10;
        // this.addChild(bgtxt);
    };
    return GameBackGround;
}(Laya.Sprite));
//# sourceMappingURL=GameBackGround.js.map