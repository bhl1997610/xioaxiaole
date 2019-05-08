class LevelReqViewManage {
	private _layer:Laya.Sprite;
	public constructor(layer:Laya.Sprite) {
		this._layer =layer;
		this.init();
	}
	 private elements:LevelElementView[];
	 private init(){
		 this.elements = new Array();
	 }


	 private stepNumText:Laya.Text;//过关步数
	 /**
	  * 创建当前关卡的过关条件元素
	  */
	  public createCurrentLevelReq(){
		  let len:number = GameData.levelReq.getLevelReqNum();
		  let el:LevelElementView;
		  for (let i = 0; i < len; i++) {
			  if(this.elements.length<=i){
				  el = new LevelElementView();
				  this.elements.push(el);
			  }	
			  else{
				  el = this.elements[i];
			  }	
			  el.eltype =GameData.levelReq.reqElements[i].type;
			  el.setTexture("home/" + "e"+el.eltype+".png");
			  el.width = 80;
			  el.x=43+(23+el.width)*i;
	
			  el.y=200;
			  
			  el.num = GameData.levelReq.reqElements[i].num;
			  this._layer.addChild(el);
			  

			 
		  }
		//   剩余步数
		   if(!this.stepNumText){
				this.stepNumText = new Laya.Text();
				this.stepNumText.x = GameData.stageW - 110;
				this.stepNumText.fontSize = 30;
				this.stepNumText.y = 80;
				this.stepNumText.scaleX = 1.5;
				this.stepNumText.scaleY = 1.5;
				this._layer.addChild(this.stepNumText);
				this.stepNumText.text = GameData.stepNum.toString();
			  }

	  }


	/**
	 * 判断是否有指定类型 
	 * */
	public haveReqType(type:string):boolean{
		let l:number = this.elements.length;
		for(let i=0;i<l;i++)
		{
			if(this.elements[i].eltype==type){
				return true;
			}
		}
		return false;
	}


	/**
	 * 更新步数信息
	 */
	
    public updateStep(){
        this.stepNumText.text = GameData.stepNum.toString();
    }
	/**
	 * 通过类型，获取当前元素再视图中的位置信息
	 */
	public getPointByType(type:string):Laya.Point{
		let p:Laya.Point = new Laya.Point();
		let len:number = this.elements.length;
		for(let i =0;i<len;i++){
			if(this.elements[i].eltype==type){
				 p.x =this.elements[i].x+this.elements[i].width/2;
				 p.y = this.elements[i].y+this.elements[i].height/2;
			}
		}
		return p;
	}
	/**
	 * 更新数据
	 */
	
    public update():void{
        console.log("更新关卡数量数据");
        var len:number = GameData.levelReq.getLevelReqNum();
        for(var i:number=0; i<len; i++){
            this.elements[i].num = GameData.levelReq.reqElements[i].num;
        }
    }
}