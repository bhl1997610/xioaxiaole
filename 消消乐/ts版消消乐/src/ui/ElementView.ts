
/**

 * 
 */	
class ElementView extends Laya.Sprite {
	private thisParent:Laya.Sprite;
    
	//游戏中的元素
	public constructor(tParent:Laya.Sprite) {
        
		super();
		this.thisParent=tParent;
		this.init();
	}
	public location:number = 0;//位置编号，用于提供移动使用

	/*-----------------------------ID 编号相关，携带测试信息-----------------------------------*/
	public _id:number =-1; //ID编号，对应GameData.elements中的数据ID，与数据下标相同

	public get id() : number {
		return this._id;
	}

	public set id(v : number) {
		this._id = v;
	}
	/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

	 /*----------------------------元素位图 初始化相关功能-----------------------------------*/
    private bitmap:Laya.Image; //当前元素中的位图数据

    /**
	 * 初始化所有数据	
	 */
	private init(){
		
		this.bitmap = new Laya.Image();
		this.mouseEnabled = true;
		let bitWidth:number =(GameData.stageW - 40)/GameData.MaxColumn;
		this.bitmap.width =bitWidth-10;
		this.bitmap.height=bitWidth-10;
		this.bitmap.pivotX=0.5;
		this.bitmap.pivotY=0.5;
		this.addChild(this.bitmap);
		
	}
	/**
	 * 设置贴图
	 */
	public setTexture(val:string){
		this.bitmap.skin = val
    }
	/*-------------------------------------焦点管理相关----------------------------------------*/
	private _focus:boolean=false;
	public get focus():boolean{
		return this._focus;
	}

	//设置选中状态的焦点样式
	public setFocus(val:boolean){
		// if(val!=this.focus){ 
			this._focus = val;		
			if(val){
				this.setTexture("home/"+ "e"+GameData.elements[this.id].type+"foucs.png");
			}else{						
				this.setTexture("home/"+"e"+GameData.elements[this.id].type+".png");
			}
		// }
	}

	/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
	/*-----------------------------------移动到新位置，乱序操作使用-----------------------------------------*/
    public speed:number = 200;
    //移动到新位置,使用cubicInOut算法移动，直线运动
    public move(){
        Laya.Tween.to(this.thisParent,{x:this.targetX(),y:this.targetY()},this.speed,Laya.Ease.bounceInOut,Laya.Handler.create(this,()=>{
			
		}));
    }
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

	
  	/*-------------------------------------显示元素，从上方掉落----------------------------------------*/
    /*-------------------------------------掉落后添加到父级别显示列表-----------------------------------*/
    public show(wait:number){
		Laya.Tween.to(this,{x:this.targetX(),y:this.targetY()},this.speed,Laya.Ease.bounceOut,Laya.Handler.create(this,this.addThisToParent));
	
	}

	private addThisToParent() //添加到父级显示对象
	{
		if(!this.parent)
		{
			this.thisParent.addChild(this);
		
		}
	}
	//设置元素的坐标位置   根据元素的loacation  设置元素的 x轴位置。
	public targetX():number{
		let girdWidth:number = (GameData.stageW - 40)/GameData.MaxColumn - 10;//单个网格宽度
        let xx:number = 20+girdWidth*(this.location%GameData.MaxColumn)+girdWidth/2;
        return xx; 
	}
	public targetY():number //目标Y轴位置
    {
        var girdWidth:number = (GameData.stageW - 40)/GameData.MaxColumn- 10;
        var startY:number = (GameData.stageH - (GameData.stageW - 30)/6 - 60 )-girdWidth*GameData.MaxColumn;
		// console.log(startY + "元素的开始排列位置。。。。。。")
        var yy:number = startY + girdWidth*(Math.floor(this.location/GameData.MaxColumn))+girdWidth/2;
        return yy;
    }
	/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

  	/*--------------------------------------移动并且返回-------------------------------------*/
    /*----------------------用于用户交换两个对象，但未找到能够连接消除的时候使用------------------------*/
    //移动到另外一个位置，然后再移动回来
    public moveAndBack(location:number,isScale:boolean=false)
    {
        var girdWidth:number = (GameData.stageW - 40)/GameData.MaxColumn - 10;
        var xx:number =girdWidth*(location%GameData.MaxColumn)+girdWidth/2+5;
        var startY:number = (GameData.stageH - (GameData.stageW - 30)/6 - 60 )-girdWidth*GameData.MaxColumn;
        var yy:number = startY + girdWidth*(Math.floor(location/GameData.MaxColumn))+girdWidth/2 -10;
        //移动时候，不仅会移动位置，还会放大或者缩小，移动回来时，scale都设置为1 
		
        if(isScale){
            Laya.Tween.to(this,{x:xx,y:yy,scaleX:1.2,scaleY:1.2},300,Laya.Ease.cubicOut, Laya.Handler.create(this, this.back));
        }else{
            Laya.Tween.to(this,{x:xx,y:yy,scaleX:0.8,scaleY:0.8},300,Laya.Ease.cubicOut, Laya.Handler.create(this, this.back));
        }
    }
    private back(){
        Laya.Tween.to(this,{x:this.targetX(),y:this.targetY(),scaleX:1,scaleY:1},300,Laya.Ease.cubicOut,Laya.Handler.create(this,()=>{
		  GameData.stopclick=false;
		}));
    }
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/


	public evm:ElementViewManage;

 	/*-----------------------------移动元素====消除元素--------------------------------------*/
	public moveAndScale(location:number,isScale:boolean=false){
		let girdWidth:number = (GameData.stageW - 40)/GameData.MaxColumn - 10;
		let xx:number =girdWidth*(location%GameData.MaxColumn)+girdWidth/2+15;
		let startY:number = (GameData.stageH - (GameData.stageW - 30)/6 - 60 )-girdWidth*GameData.MaxColumn;
        let yy:number = startY + girdWidth*(Math.floor(location/GameData.MaxRow))+girdWidth/2 -10;
		if(isScale){//第一个元素
			Laya.Tween.to(this,{x:xx,y:yy,scaleX:1.4,scaleY:1.4},300,Laya.Ease.cubicInOut, Laya.Handler.create(this, this.backScaleNoCall));
		}
		else{//第二个元素
			Laya.Tween.to(this,{x:xx,y:yy,scaleX:0.3,scaleY:0.3},300,Laya.Ease.cubicInOut, Laya.Handler.create(this, this.backScale));
		}
	}




	private backScale(){
		Laya.Tween.to(this,{scaleX:1,scaleY:1},300,Laya.Ease.backOut, Laya.Handler.create(this, this.canRemove));
	}
	private backScaleNoCall(){
		Laya.Tween.to(this,{scaleX:1,scaleY:1},300,Laya.Ease.backOut,Laya.Handler.create(this,()=>{
		
		}));
	}
	public canRemove(){
		let evt:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.REMOVE_ANIMATION_OVER);
	
		
      	let hv= ui.select.self.uiManager.getUI(UIType.homeView) as homeView;
		
		hv.evm.event(ElementViewManageEvent.REMOVE_ANIMATION_OVER,evt);
	}

	
	/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

	/*-----------------此动画用于将元素移动到关卡积分器位置,然后移除显示列表----------------------------*/

    /*-------------------------删除元素，当元素不属于关卡条件时，执行此动画---------------------------------*/
    //播放直接消除动画,自己放大，然后缩回到原有大小，然后删除
    public playRemoveAni(){
		 Laya.Tween.to(this,{scaleX:0.1,scaleY:0.1},300,Laya.Ease.cubicInOut, Laya.Handler.create(this, this.removeAniCall));
    }
    private removeAniCall(){ //元素删除后调用
        if(this.parent){			
            this.parent.removeChild(this); //删除元素
        }
		var evt:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.UPDATE_MAP);
	   	let hv =  ui.select.self.uiManager.getUI(UIType.homeView) as homeView;
		hv.evm.updateMap(evt);
		
		
		
	   
    }
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/


	/*-------------------------移动到新位置，方块被消除后重新生成下落使用---------------------------------*/

	/**
	 * 播放曲线动画
	 */
	public playCurveMove(tx:number,ty:number)
	{
		Laya.Tween.to(this,{x:tx,y:ty},700,Laya.Ease.quadOut, Laya.Handler.create(this, this.overCurveMove));
	}
	
	private overCurveMove(){
		if(this.parent){
			this.parent.removeChild(this);
		}
		let evt:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.UPDATE_MAP);
		let hv = ui.select.self.uiManager.getUI(UIType.homeView) as homeView;
		hv.evm.updateMap(evt);
	  
		
	}
	/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
    //根据列编号，重新计算元素X轴位置，从起始Y轴开始播放下落动画
    public moveNewLocation(){
		if(!this.parent){
			let girdWidth:number = (GameData.stageW - 40)/GameData.MaxColumn;
			let startY:number = (GameData.stageH - (GameData.stageW - 30)/6 - 60 )-girdWidth*GameData.MaxColumn;
			this.y = startY - this.width;
			this.scaleX = 1;
			this.scaleY = 1;
			this.x = this.targetX();			
			//被删除的元素要重新加入
			this.thisParent.addChild(this);
		}
        Laya.Tween.to(this,{x:this.targetX(),y:this.targetY()},this.speed,Laya.Ease.bounceOut, Laya.Handler.create(this, this.moveNewLocationOver));
    }
    private moveNewLocationOver()
    {
       	let evt:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.UPDATE_VIEW_OVER);
		let hv =  ui.select.self.uiManager.getUI(UIType.homeView) as homeView;
		hv.evm.moveNewLocationOver(evt);
		
    }
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/


}