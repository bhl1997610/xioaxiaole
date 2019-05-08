class GameOverPanel extends Laya.Sprite
{
    public constructor()
    {
        super();
    }

    private _view:Laya.Sprite;
    private _isSuccess:boolean = false;
    public show(isSuccess:boolean)
    {
        this._isSuccess = isSuccess;
        
        this._view = new Laya.Sprite();
        this._view.loadImage('home/level_0002_background.png');
        this._view.width = GameData.stageW;
        this._view.height = GameData.stageH;    
        this.addChild(this._view);
       
        this.scaleX = 0.1;
        this.scaleY = 0.1;
        Laya.Tween.to({scaleX:1,scaleY:1},Laya.Ease.bounceOut,700,this.playStarAni);
        this.playStarAni();
    }
    private playStarAni()
    {/*
        var gameover:egret.Bitmap = new egret.Bitmap();
        gameover.texture = RES.getRes("gameovertitle_png");
        gameover.width = this._view.width/2;
        gameover.height = 60;
        gameover.x = this._view.x + (this._view.width-gameover.width)/2;
        gameover.y = this._view.y - 10;
        gameover.scaleX=0;
        gameover.scaleY = 0;
        this.addChild(gameover);
        egret.Tween.get(gameover).to({scaleX:1,scaleY:1},700,egret.Ease.bounceOut);
*/
        console.log("播放失败动画");
        if(this._isSuccess)
        {
            //成功动画
            let success:Laya.Image = new Laya.Image();
            success.loadImage("home/success.png");
            success.width = (this._view.width-50)/3;
            success.height = success.width;
            success.x = (GameData.stageW-success.width*2)/3 +this._view.x;
            success.y = 150+this._view.y;
            success.scaleX = 1.5;
            success.scaleY = 1.5;
            success.alpha = 0;
            this.addChild(success);
            Laya.Tween.to({scaleX:1,scaleY:1,alpha:1},Laya.Ease.circIn,700);
          
    

        }
        else
        {
            //失败动画
            let fail:Laya.Image = new Laya.Image();
            fail.loadImage('home/fail.png');
            fail.width = (this._view.width-50)/3;
            fail.height = fail.width;
            fail.x = (GameData.stageW-fail.width*2)/3 +this._view.x;
            fail.y = 150+this._view.y;
            fail.scaleX = 1.5;
            fail.scaleY = 1.5;
            fail.alpha = 0;
            this.addChild(fail);
            Laya.Tween.to({scaleX:1,scaleY:1,alpha:1},Laya.Ease.circIn,700);

        

        }
    }
}