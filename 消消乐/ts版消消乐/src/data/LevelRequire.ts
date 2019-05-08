
/**
 * 关卡控制类
 */	
class LevelRequire {
	/*
        过关条件，内置一个数组，用来记录当前关卡需要消除多少种类型的元素。
        每种元素要消除的数量为多少
     */
	public reqElements:Array<LevelRequireElement>;//记录有多少类型的元素需要消除。。
	public constructor()
    {
        this.reqElements = new Array();
    }

	/**
	 * 关卡过关条件数量
	 */
	public getLevelReqNum():number
	{
		return this.reqElements.length;
	}

	
	 /**
	  * 添加一个关卡元素，类型与数量
	  */
	 public addElements(type:string,num:number)
	 {
		 let element:LevelRequireElement = new LevelRequireElement();
		 element.num =num;
		 element.type =type;
		 this.reqElements.push(element);
	 }

	 /**
	  * 启动关卡条件修改 
		*/
	 public openChange(){
		 this.reqElements = [];
	 }

 	 /**
	  * 减少关卡中得元素数量
	  */
	  public changeReqNum(type:string,num:number){
		  let len:number = this.getLevelReqNum();
		  for(let i=0;i<len;i++)
		  {
			  if(this.reqElements[i].type == type)
			  {
					this.reqElements[i].num -= num;
					console.log("最新数量",this.reqElements[i].num);
					return;
			  }
			  
		  }
	  }

	  /**
	   * 检测所有关卡元素是否都被删除
	   * 任何一个类型的num >0时，都没过关。
	   */
	  public isClear():boolean{
		    let len:number = this.getLevelReqNum();
		  for(let i=0;i<len;i++)
		  {
			  if(this.reqElements[i].num > 0)
			  {				
					return false;
			  }			  
		  }
		  return true;
	  }

}