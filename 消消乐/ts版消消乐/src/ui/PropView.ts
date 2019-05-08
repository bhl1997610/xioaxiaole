/**
 * 下方道具界面
 */
class PropView extends Laya.Sprite {
	public constructor(type:number) {
		super();
		this._type = type;
		this.init();
	}
	//道具元素界面
	private _view_active:Laya.Image;//激活道具图像
	private _numText:Laya.Label;//数字文本
	private _type:number = -1;            //道具类型
	public id:number=-1;
	private first=1;
	
	public get proptype():number
    {
        return this._type;
    }

	private init(){
		this.createView();
		this.createNumText();
		this.addChild(this._view_active);
		
		this.addChild(this._numText);
		
	}

	//创建道具盒子并设置位置
	private createNumText(){
		this._numText = new Laya.Label();
		this._numText.x= this._view_active.width+20 ;
		this._numText.y=40;
		this._numText.fontSize=40;
		this._numText.changeText("1");
	}

	private createView(){
		if(!this._view_active){
			this._view_active = new Laya.Image();
			this._view_active.skin=this.getActivateTexture(this._type);
			this._view_active["type"]=this._type;
			this._view_active.width= this._view_active.height=100;
			this._view_active.pivot(this._view_active.width/2,this._view_active.height/2);
			console.log(this.getActivateTexture(this._type))
			this._view_active.on(Laya.Event.CLICK,this,this.click)
			
		}
	}
   private click(){
	   if(this.first==1){
		 this._view_active.scale(0.8,0.8);
		this._view_active.skin=this.getFocusTexture(this._view_active["type"]);
		this.first=0;
	   }else{
		   this._view_active.scale(1,1);
		   this._view_active.skin=this.getActivateTexture(this._view_active["type"]);
		   this.first=1;
	   }
	   
   }
	private getFocusTexture(type:number):string{
			let textureName:string ="";
			switch(type){
				case 0:
					textureName = "home/zhenghangactive.png";
					break;
				case 1:
					textureName = "home/zhenglieactive.png";
					break;
				
			}
			return textureName;
		}
	
	private getActivateTexture(type:number):string{
		let textureName:string ="";
		switch(type){
			case 0:
					textureName = "home/zhenghang.png";
					break;
				case 1:
					textureName = "home/zhenglie.png";
					break;
		}
		return textureName;
	}

    private getDisableTexture(type:number):string
    {
        var textureName:string = "";
        switch(type)
        {
        case 0:
					textureName = "home/zhenghangactive.png";
					break;
				case 1:
					textureName = "home/zhenglieactive.png";
					break;
        }
        return textureName;
    }


}