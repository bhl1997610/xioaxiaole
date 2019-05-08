module ui{
export class login extends ui.UI.loginUI{
    private static _instance:login;
    constructor(){
        super();
        this.login.on(Laya.Event.CLICK,this,this.loginClick)
        this.register.on(Laya.Event.CLICK,this,this.registerClick)
        this.login.on(Laya.Event.MOUSE_OVER,this,this.small,[this.login])
        this.register.on(Laya.Event.MOUSE_OVER,this,this.small,[this.register])
        this.login.on(Laya.Event.MOUSE_OUT,this,this.recover)
        this.register.on(Laya.Event.MOUSE_OUT,this,this.recover)
   
    }
    public static get instance(){
        if(!this._instance){
            this._instance=new login();
        }
        return this._instance;
    }
    public loginClick(){
        let name=this.username.text;
        let password=this.password.text;
        if(name==""||password==""){
            let dialog=ui.dialog.instance;
            Laya.stage.addChild(dialog);
            dialog.gametext.changeText("用户名或密码不能为空");
            return;
        }
        let msg='{ "head":"login", "name":'+'"'+name+'"'+', "password":'+'"'+password+'"'+' }';
        net.Server.self.sendmsg(msg);
        
    }
    public registerClick(){
        
        let name=this.username.text;
        let password=this.password.text;
            if(name==""||password==""){
            let dialog=ui.dialog.instance;
            Laya.stage.addChild(dialog);
            dialog.gametext.changeText("用户名或密码不能为空");
            return;
        }
        let msg='{ "head":"register", "name":'+'"'+name+'"'+', "password":'+'"'+password+'"'+' }';
       net.Server.self.sendmsg(msg); 
    }
    public small(btn){
        btn.scale(0.8,0.8);
    }
    public recover(){
        this.login.scale(1,1);
        this.register.scale(1,1);
       
    }
    public remove(){
        this.parent.removeChild(this);
        this.destroy();
        
    }

}  
}
 