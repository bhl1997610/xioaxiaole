class PropViewManage {
	private _layer:Laya.Sprite;

	public constructor(root:Laya.Sprite) {
		this._layer =root;
		this.init();
	}

	private _props:PropView[];
	private init(){
		this._props = new Array();
		this.testdata();

	}
    /**
     * (测试)随机生成 道具 数量
     */
    private testdata()
    {
        for(var i:number=0;i<2;i++)
        {
            var prop:PropView = new PropView(i);
            prop.x = 50+(400)*i;
            //console.log("道具宽度",prop.width);
            prop.y = 1050;
            this._layer.addChild(prop);
            this._props.push(prop);
               
            prop.id = i;
            
        }

    }


   
   
	public static propType:number = -1;  //道具类型
    /**
     * 使用道具
     */
    public useProp(){
     
    }
}