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
var GameOverPanel = /** @class */ (function (_super) {
    __extends(GameOverPanel, _super);
    function GameOverPanel() {
        var _this = _super.call(this) || this;
        _this._isSuccess = false;
        return _this;
    }
    GameOverPanel.prototype.show = function (isSuccess) {
        this._isSuccess = isSuccess;
        this._view = new Laya.Sprite();
        this._view.loadImage('home/level_0002_background.png');
        this._view.width = GameData.stageW;
        this._view.height = GameData.stageH;
        this.addChild(this._view);
        this.scaleX = 0.1;
        this.scaleY = 0.1;
        Laya.Tween.to({ scaleX: 1, scaleY: 1 }, Laya.Ease.bounceOut, 700, this.playStarAni);
        this.playStarAni();
    };
    GameOverPanel.prototype.playStarAni = function () {
        console.log("播放失败动画");
        if (this._isSuccess) {
            //成功动画
            var success = new Laya.Image();
            success.loadImage("home/success.png");
            success.width = (this._view.width - 50) / 3;
            success.height = success.width;
            success.x = (GameData.stageW - success.width * 2) / 3 + this._view.x;
            success.y = 150 + this._view.y;
            success.scaleX = 1.5;
            success.scaleY = 1.5;
            success.alpha = 0;
            this.addChild(success);
            Laya.Tween.to({ scaleX: 1, scaleY: 1, alpha: 1 }, Laya.Ease.circIn, 700);
        }
        else {
            //失败动画
            var fail = new Laya.Image();
            fail.loadImage('home/fail.png');
            fail.width = (this._view.width - 50) / 3;
            fail.height = fail.width;
            fail.x = (GameData.stageW - fail.width * 2) / 3 + this._view.x;
            fail.y = 150 + this._view.y;
            fail.scaleX = 1.5;
            fail.scaleY = 1.5;
            fail.alpha = 0;
            this.addChild(fail);
            Laya.Tween.to({ scaleX: 1, scaleY: 1, alpha: 1 }, Laya.Ease.circIn, 700);
        }
    };
    return GameOverPanel;
}(Laya.Sprite));
//# sourceMappingURL=GameOverPanel.js.map