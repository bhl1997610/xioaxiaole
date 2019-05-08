class LevelElementView  extends Laya.Sprite{
	public constructor() {
		super();
		this.init();
	}
	public eltype:string="";//代表元素类型
	
	public set num(val:number){
		if(val<=0){
			if(!this.checkmarkbit){
				this.checkmarkbit = new Laya.Sprite();
				// this.checkmarkbit.texture =RES.getRes("checkmark_png");
				this.checkmarkbit.loadImage('home/checkmark.png');
				this.checkmarkbit.x = (this.bitmap.width - this.checkmarkbit.width)/2;
                this.checkmarkbit.y = this.bitmap.height + this.bitmap.y - this.checkmarkbit.height/2;
                this.addChild(this.checkmarkbit);
                this.removeChild(this.bittext);
			}
		}else{
			this.bittext.text =val.toString();
			
		}
	}
	public get num():number
    {
        return Number(this.bittext.text);
    }
	private bitmap:Laya.Sprite;//元素图
	private checkmarkbit:Laya.Sprite; //对勾图
	private bittext:Laya.Label;
	private init(){
		// this.showButtons =false; //关闭触摸
		if(!this.bitmap){
			this.bitmap = new Laya.Sprite();
		}
		let bitWidth:number = (GameData.stageW - 40)/GameData.MaxColumn;
		this.bitmap.width = bitWidth;
		this.bitmap.height = bitWidth;
	
		this.addChild(this.bitmap);

		this.bittext = new Laya.Label();
    	// this.bittext.font = RES.getRes("number_fnt");
        this.bittext.changeText("0");
		this.bittext.fontSize=35;
        this.bittext.x = (bitWidth -this.bittext.width)+15;

        this.bittext.y = this.bitmap.height + this.bitmap.y - this.bittext.height>>1;
		//console.log(this.bittext.height  );

	
		this.addChild(this.bittext);
	}


	public setTexture(val:string){
		this.bitmap.loadImage(val);
    }

	 
}