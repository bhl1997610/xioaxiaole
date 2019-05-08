
/**
 * 
 */
class ElementViewManage extends Laya.EventDispatcher {
	private _layer:Laya.Sprite; //元素存在的容器
	public constructor(elementLayer:Laya.Sprite) {
		super();
        this._layer = elementLayer;
        this.init();
	}
	
	 /*-----------------------------初始化数据--------------------------------------*/
    //ElementView对象池，全局仅最多GameData.MaxRow*GameData.MaxColumn个，默认为81个
	private elementViews:ElementView[];
	/**
	 * 初始化所有数据变量
	 */
	private init(){
		this.elementViews = new Array();
		let len:number = GameData.MaxColumn*GameData.MaxRow;
		let el:ElementView;
		let bitWidth:number =(GameData.stageW - 40)/GameData.MaxColumn;
		this._layer.pos(14,-30);
		for (let i = 0; i < len-GameData.unmapnum; i++) {
			el = new ElementView(this._layer);
			el.id=i;
			el.location = GameData.elements[i].location;
			this.elementViews.push(el);
			el.evm = this;// 给ElementView用来触发 ElementViewManageEvent事件
			el.width = (GameData.stageW - 40)/GameData.MaxColumn -10 //给元素设置宽高，设置点击区域
			el.height = (GameData.stageW - 40)/GameData.MaxRow - 10;
			// el.x = -1*bitWidth/2;
			// el.y = -1*bitWidth/2;
			el.on(Laya.Event.CLICK,this,this.elTap);
			
		}
		
	}

	/*-----------------------------焦点相关控制--------------------------------------*/
	private _currentTapID:number = -1;  //当前被点击（即将获取焦点）的元素ID，如为-1则表示没有元素获取焦点或无点击对象
	private elTap(evt:Laya.Event){
		let ev:ElementView = <ElementView>evt.currentTarget;
		if(GameData.stopclick)return;
		if(PropViewManage.propType==-1)//没使用道具
		{
			if(this._currentTapID!=-1){  // 没有元素获取焦点
				if(ev.id ==this._currentTapID){
					ev.setFocus(false);//设置正常图片
					this._currentTapID = -1;
				}else{
					let event:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.TAP_TWO_ELEMENT);//点击第二个元素 回掉函数.
					event.ele1 = this._currentTapID;
					event.ele2 = ev.id;
					 let hv = ui.select.self.uiManager.getUI(UIType.homeView) as homeView;
					this.event(ElementViewManageEvent.TAP_TWO_ELEMENT,event);
				}
			}else{
				ev.setFocus(true);//设置焦点图
				this._currentTapID = ev.id;
			}
		}else//使用道具
		{
			if(this._currentTapID!=-1)
			{
				this._currentTapID =-1;
			}
			let evt:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.USE_PROP_CLICK);
			evt.propToElementLocation = ev.location;
			let hv =  ui.select.self.uiManager.getUI(UIType.homeView) as homeView;
			hv.evm.event(ElementViewManageEvent.USE_PROP_CLICK,evt)
		}
	}

	public setNewElementFocus(location:number){
		this.elementViews[this._currentTapID].setFocus(false);
		this.elementViews[location].setFocus(true);
		this._currentTapID=location;
	}

	/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

  	/*-----------------------------显示所有元素，并播放出场动画--------------------------------------*/
	  public showAllElements(){
		  this._layer.removeChildren();
		  let girdWidth:number = (GameData.stageW -40)/GameData.MaxColumn;
		  let startY:number  = (GameData.stageH - (GameData.stageW - 30)/6 - 60 )-girdWidth*GameData.MaxColumn;
		  let ele:ElementView;
		  for (let i = 0; i < GameData.MaxRow; i++) {
			 for (let t = 0; t < GameData.MaxColumn; t++) {				
				 if(GameData.mapData[i][t]!=-1){
					ele = this.elementViews[GameData.mapData[i][t]];
					ele.setTexture( "home/" + "e"+GameData.elements[GameData.mapData[i][t]].type+".png");
					ele.x = ele.targetX();
					ele.y = ele.targetY();
					ele.show((50*GameData.MaxColumn*GameData.MaxRow-50*GameData.unmapnum)-(i*GameData.MaxRow)*50);
					
				 }
				
			 }
			  
		  }
	  }
	/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/


 

	/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

	/*-----------------------------播放 删除动画--------------------------------------*/
		
	/**
	 * isBack = true
	 * 可以交换，但是交换后没有发生位置移动
	 * 移除焦点
	 * 播放一个交换的动画，然后两个位置再换回来
	 * isBack=false
	 * 播放 删除动画-
	*/
	public changeLocationWithScaleOrBack(id1:number,id2:number,isBack=false){
		//从 e1id 交换到 e2id
		let  e1id=id1;//有焦点的元素
		let  e2id=id2;
		if(this.elementViews[id2].focus){
			e1id =id2;
			e2id =id1;
		}
		
		this.elementViews[e1id].setFocus(false);
		if(this._layer.getChildIndex(this.elementViews[e1id])<this._layer.getChildIndex(this.elementViews[e2id])){
			//交换两个指定子对象的 Z 轴顺序（从前到后顺序）。显示对象容器中所有其他子对象的索引位置保持不变。
			// this._layer.swapChildren(this.elementViews[e1id],this.elementViews[e2id]);
		}	
		if(isBack)//播放交互动画，交换后再返回-
		{
			this.elementViews[e1id].moveAndBack(this.elementViews[e2id].location,true);
			this.elementViews[e2id].moveAndBack(this.elementViews[e1id].location);
			
		}
		else//播放 删除动画
		{
			this.elementViews[e1id].moveAndScale(this.elementViews[e2id].location,true);
			this.elementViews[e2id].moveAndScale(this.elementViews[e1id].location);
			
	
		}
		
		this._currentTapID = -1;
	}

	
	/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

	/*-----------------------------动画播放控制--------------------------------------*/
    private moveEleNum:number=0;
	/**
	 * 播放曲线动画，此类型动画用于可消除过关条件得情况
	 */

	public playReqRemoveAn(id:number,tx:number,ty:number)
	{
        this.moveEleNum++;
        var el:ElementView = this.elementViews[id];
        if(el.parent){
            this._layer.setChildIndex(el, this._layer.numChildren -1);
        }
        el.playCurveMove(tx,ty);
    }
	/**
	 * 播放放大动画，播放后直接删除,用于可删除元素，但元素类型不是关卡过关条件
	 */
	public playRemoveAni(id:number){
		this.moveEleNum++;
		let el:ElementView =this.elementViews[id];
		if(el.parent){
			
			this._layer.setChildIndex(el,this._layer.numChildren - 1);
		}
		el.playRemoveAni();
		
	}

   /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
   
      //删除动画完成，现在更新地图元素
    public updateMap(evt:ElementViewManageEvent)
    {
		// console.log("删除动画完成")
        this.moveEleNum--;
        if(this.moveEleNum==0)//不会多次触发 事件
        {
			let evt:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.UPDATE_MAP);
			let hv = ui.select.self.uiManager.getUI(UIType.homeView) as homeView;
			hv.evm.event(ElementViewManageEvent.UPDATE_MAP,evt);
        }
    }
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/


	
	 /*-----------------------------更新整个地图中元素位置--------------------------------------*/
    public updateMapData(){
        var len:number = this.elementViews.length;
        //this.moveLocElementNum = 0;
        for(var i:number=0;i<len;i++)
        {
            this.elementViews[i].location=GameData.elements[i].location;
            this.elementViews[i].setTexture("home/" + "e"+ Number( GameData.elements[i].type)+".png" );
            this.elementViews[i].moveNewLocation();
        }
    }
    private moveLocElementNum:number = 0;
    public moveNewLocationOver(event:ElementViewManageEvent)//新位置掉落结束
    {
        this.moveLocElementNum++;
		
        if(this.moveLocElementNum==(GameData.MaxColumn*GameData.MaxRow-GameData.unmapnum))//不会多次触发 事件
        {
            var evt:ElementViewManageEvent = new ElementViewManageEvent(ElementViewManageEvent.UPDATE_VIEW_OVER);
			let hv =  ui.select.self.uiManager.getUI(UIType.homeView) as homeView;
			hv.evm.event(ElementViewManageEvent.UPDATE_VIEW_OVER,evt); //地图刷新后，继续判断是否有连消。
			this.moveLocElementNum =0;//重置
        }

    }
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/


	/*-----------------------------乱序操作，移动全部元素位置--------------------------------*/
    public updateOrder(){
        var len:number = this.elementViews.length;
		Laya.Tween.clearAll;
        for(var i:number=0;i<len;i++){
            this.elementViews[i].location = GameData.elements[i].location;
            this.elementViews[i].move();
			
        }
    }
    /*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/
}