import WebGL = Laya.WebGL;
// 程序入口
class GameMain {
    private res = "res/atlas/home.atlas"
    private res1 = "res/atlas/home.png"
    private pgbar="res/atlas/comp.png"
    private pgbar1="res/atlas/comp.atlas"
    private progressbar:Laya.ProgressBar
    constructor()  
    {
        Laya.MiniAdpter.init();
        Laya.init(640, 800, WebGL);
        Laya.stage.alignV = "middle";
        Laya.stage.alignH = "center";
        Laya.stage.scaleMode = "fixedwidth";
        
        var bar = [this.pgbar,this.pgbar1];
        Laya.loader.load(bar,Laya.Handler.create(this,this.onLoaded));
    

    }
    private onLoaded(): void {
        this.progressbar=new Laya.ProgressBar("comp/progress.png")
        this.progressbar.width = 400;
        this.progressbar.x = (Laya.stage.width - this.progressbar.width) / 2;
        this.progressbar.y = Laya.stage.height / 2;
        this.progressbar.changeHandler = new Laya.Handler(this, this.onChange);
        let resarr=[this.res,this.res1]
        Laya.loader.load(resarr, null,Laya.Handler.create(this, this.onProgress,null,false));
        var bgsp = new Laya.Sprite;
        Laya.stage.addChild(bgsp);
        var bg = new Laya.Image;
        bg.skin = "home/level_0001_background.png";
        bgsp.addChild(bg);
        Laya.stage.addChild(this.progressbar);
        // new gameScene();
    }
    private onChange(value:number){
        console.log("进度：" + Math.floor(value * 100) + "%");
    }
    private onProgress(value:number){
        if(value>=1){
            value=1
        }
      this.progressbar.value =value
    }
   

}
new GameMain();