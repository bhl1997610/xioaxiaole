// 程序入口
class GameMain {

    public static Instance: GameMain;
    // public userData: UserData;
    public uiManager: UIManager;
    public homeView: homeView;
    private ROBOT_DATA_PATH: string = "res/data/l1.json";
    private ROBOT_TEXTURE_PATH: string = "res/atlas/home.atlas";
    private ROBOT_IMG_PATH: string = "res/atlas/home.png";
    private progressBar: Laya.ProgressBar;
    private bgImage: Laya.Image;
    public gametext:Laya.Text;
    constructor()  {
        //初始化引擎
        Laya.init(640, 1200, Laya.WebGL);
        //设置适配模式
        Laya.stage.scaleMode = "showall";
        Laya.stage.alignH = "center";
        Laya.stage.bgColor = "#999999";
        Laya.stage.frameRate = Laya.Stage.FRAME_MOUSE;

        GameMain.Instance = this;
        
       
        // this.MapData.name = "MainGame";
        //获取数据(用户数据，配置数据解析);
        // TODO:xxx asdasdasdasdasdasd

        


        let proArray = [{ url: "res/atlas/ui/friend.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/friend.atlas", type: Laya.Loader.ATLAS }]
        proArray.push({ url: this.ROBOT_DATA_PATH, type: Laya.Loader.JSON });
        proArray.push({ url: this.ROBOT_TEXTURE_PATH, type: Laya.Loader.ATLAS });
        proArray.push({ url: this.ROBOT_IMG_PATH, type: Laya.Loader.IMAGE });


        //  需要loading界面的话就在此函数增加一个回调函数
        Laya.loader.load(proArray, Laya.Handler.create(this, this.onproloaded));
    }
    public onproloaded(): void {
        let resArray: Array<any> = [];
        resArray.push({ url: "res/atlas/ui/bounced.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/bounced.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/btn.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/btn.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/cloth.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/cloth.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/game.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/game.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/gif.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/gif.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/goldman.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/goldman.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/roulette.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/roulette.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/set.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/set.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/task.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/task.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/tool.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/tool.atlas", type: Laya.Loader.ATLAS },
            { url: "res/atlas/ui/yuehui.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/yuehui.atlas", type: Laya.Loader.ATLAS }, 
            { url: "res/atlas/ui/sigin.png", type: Laya.Loader.IMAGE }, { url: "res/atlas/ui/sigin.atlas", type: Laya.Loader.ATLAS }, )
        
        this.bgImage = new Laya.Image();
        this.bgImage.skin = "home/level_0001_background.png";
        this.bgImage.width = 640;
        this.bgImage.height = 1200;
        Laya.stage.addChild(this.bgImage);
        this.progressBar = new Laya.ProgressBar("ui/friend/progress.png");

        this.progressBar.width = 400;

        this.gametext=new Laya.Text();
        this.gametext.text="开心消消乐";
        this.gametext.color="#ff5e2c";
        this.gametext.fontSize=70;
        this.gametext.bold=true;
        this.gametext.font="Microsoft YaHei";
        this.gametext.x=(640-this.gametext.width)/2;
        this.gametext.y=300;
        Laya.stage.addChild(this.gametext);

        this.progressBar.x = (Laya.stage.width - this.progressBar.width) / 2;
        this.progressBar.y = Laya.stage.height / 2;
        Laya.stage.addChild(this.progressBar);
       

        Laya.loader.load(resArray, Laya.Handler.create(this, this.onloaded), Laya.Handler.create(this, this.progress, [], false));



    }
    public onloaded() {
        net.Server.instance.connect();
        Laya.timer.once(1000,this,()=>{
             this.progressBar.visible=false;
             let login=ui.login.instance;
             Laya.stage.addChild(login);
                //  let step=20;
                //            let msg='{ "head":"update", "name":"aaa", "stage":"stage3", "step":'+'"'+step+'"'+' }';
                //            net.Server.self.sendmsg(msg);
        })
      


        
        ///外部举例调用数据
        ///GameMain.Instance.userData
        ///外部举例调用UImanager
        ///GameMain.Instance.uiManager

        // 创建添加主逻辑控制类
    }
    public progress(value) {
        if (value >= 1) {
            this.progressBar.value = 1
        } else {
            this.progressBar.value = value;
        }

    }

}
new GameMain();