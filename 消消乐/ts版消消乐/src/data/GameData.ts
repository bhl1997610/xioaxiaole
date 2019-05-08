class GameData {
	public static unmapnum:number = 0;//空白地图块数量
	public static mapData:number[][]; //游戏地图,-1表示块地图不能使用，－2表示此地图没有元素。-3表示雪块
	public static stepNum:number = 0;//玩家剩余步数
	public static levelStepNum:number =0;//当前关卡步数
	public static elementTypes:number[];//当前关卡出现的元素类型
	public static unusedElements:number[];//游戏中未使用得元素，仅记录元素ID
	public static levelBackgroundImageName = ""; //当前关卡背景图资源名
	public static stopclick:boolean=false;
	public static MaxRow:number = 9;//最大的行
	public static MaxColumn:number = 9;//最大的列
	public static currentElementNum:number = 0;//当前关卡游戏中地图可用元素数量
	public static token:boolean=false;//登录凭证
	public static levelReq:LevelRequire;//当前关卡过关条件
	public static elements:GameElement[];//游戏中出现得元素数据池，最多为81个，因为9*9
	public static isgameover:boolean=false;
	public static phdata=[];
	public static phdata1=[];
	public static phdata2=[];
	public static phdata3=[];
	public static first=0;
	public static second=0;
	public static third=0;
	public static nickname:string;
	public static curstage=1;
	 //舞台宽高，此封装为了方便调用
    public static stageW:number = 0;
    public static stageH:number = 0;

	//初始化游戏数据，仅仅创建空对象
	public static initData(){
		GameData.mapData = new Array();
		for(let i=0;i<GameData.MaxRow;i++){
			let arr:Array<number> = new Array();
			GameData.mapData.push(arr);
			for(let t=0;t<GameData.MaxColumn;t++){
				GameData.mapData[i].push(-2);
			}
		}	
		GameData.levelReq = new LevelRequire();

		GameData.elements = new  Array();
		GameData.unusedElements = new Array();
		let len:number = GameData.MaxRow *  GameData.MaxColumn;
		let element:GameElement;

		// 给所有元素创建唯一ID
		for(let i=0;i<len;i++){
			element = new GameElement();
			element.id = i;
			GameData.elements.push(element);
			GameData.unusedElements.push(i);
		}

		GameData.stageW = Laya.stage.width;
		GameData.stageH = Laya.stage.height;
	}
}
