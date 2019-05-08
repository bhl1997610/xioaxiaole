/*
* UI管理器;
*/
class UIManager
{
    
    private openArray: UIBase[] = [];
    private hideArray: UIBase[] = [];

    constructor()
    {

    }

    public openUI(type: UIType, obj: any[], call: Laya.Handler,parm:Array<number>)
    {
        let hide: boolean = false;
        let ui: UIBase;
        let index: number;
        for(let i = 0; i < this.hideArray.length; i++)
        {
            //如果是隐藏的UI，显示UI
            if(this.hideArray[i].type == type)
            {
                index = i;
                hide = true;
                ui = this.hideArray[i];
                break;
            }
        }

        if(hide)
        {
            this.hideArray.splice(index, 1);
            this.openArray.push(ui);
        }
        else
        {
            for(let i = 0; i< this.openArray.length; i++)
            {
                //如果已经打开，刷新还是不响应看需求
                if(this.openArray[i].type == type)
                    return;
            }

            try
            {
                
               ui=new  homeView(parm)
            }
            catch(e)
            {
                console.log(e);
                return;
            }
        }        
        
        //打开UI
        ui.open(obj, new Laya.Handler(this, this.onOpen, [ui, call]));     
        this.openArray.push(ui);
    }

    private onOpen(ui: UIBase, call: Laya.Handler)
    {
        Laya.stage.addChild(ui);
        ui.visible = true;
        ui.show();
        if(call)
            call.run();
    }
    public close(){
        this.openArray=[];
    }
    //获取已经打开的UI
    public getUI(type: UIType): UIBase
    {
        for(let i = 0; i< this.openArray.length; i++)
        {            
            if(this.openArray[i].type == type)
                return this.openArray[i];
        }
        return null;
    }

    public hideUI(type: UIType)
    {
        let ui = null;
        let index: number;
        for(let i = 0; i< this.openArray.length; i++)
        {            
            if(this.openArray[i].type == type)
            {
                ui = this.openArray[i];
                index = i;
            }   
        }
        if(ui)
        {
            this.openArray.splice(index, 1);
            this.hideArray.push(ui);
        }
            
    }
}

interface UIBase extends laya.ui.View
{
    type: UIType;
    /**
     * 打开UI
     * obj打开UI时传入的参数
     * call打开UI后加载完数据的回调
     */
    open(obj: any[], call: Laya.Handler);
    close();//销毁关闭UI
    hide();//隐藏不销毁UI
    show();//打开后加载完数据显示UI
}

enum UIType
{
    UITest, //测试
    homeView,   //主界面
    Level,  //关卡界面
    Login,  //登录 
    ElementView, //测试主界面  
}