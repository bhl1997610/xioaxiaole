module ui {
    export class paihang extends ui.UI.paihangUI {
        private static _instance: paihang;
        public static self:paihang;
        constructor() {
            super();
            this.tab.selectHandler = new Laya.Handler(this,this.onSelecte);
            this.btn_close.on(Laya.Event.CLICK,this,this.close);
            paihang.self=this;
        }
        private onSelecte(index){
          this.stack.selectedIndex=index;
        }
        private close(){
            this.parent.removeChild(this);
            let home=ui.home.instance;
            Laya.stage.addChild(home);
            home.playani();
        }
        public static get instance() {
            this._instance = new paihang();
            return this._instance;
        }
        public init() {
            this.paihang.vScrollBarSkin = "";
            this.paihang.renderHandler = new Laya.Handler(this, this.updateItem1);
            this.paihang.array =  GameData.phdata1;
            this.paihang1.vScrollBarSkin = "";
            this.paihang1.renderHandler = new Laya.Handler(this, this.updateItem2);
            this.paihang1.array =  GameData.phdata2;
            this.paihang2.vScrollBarSkin = "";
            this.paihang2.renderHandler = new Laya.Handler(this, this.updateItem3);
            this.paihang2.array =  GameData.phdata3;

        }
        private updateItem1(cell, index) {
            let data = cell.dataSource;
            let mc = cell.getChildAt(0) as Laya.Text;
            let name = cell.getChildAt(1) as Laya.Text;
            let bushu = cell.getChildAt(2) as Laya.Text;
            mc.changeText(index);
            name.changeText(data.name);
            bushu.changeText(data.stage1);
        }
        private updateItem2(cell, index) {
            let data = cell.dataSource;
            let mc = cell.getChildAt(0) as Laya.Text;
            let name = cell.getChildAt(1) as Laya.Text;
            let bushu = cell.getChildAt(2) as Laya.Text;
            mc.changeText(index);
            name.changeText(data.name);
            bushu.changeText(data.stage2);
        }
        private updateItem3(cell, index) {
            let data = cell.dataSource;
            let mc = cell.getChildAt(0) as Laya.Text;
            let name = cell.getChildAt(1) as Laya.Text;
            let bushu = cell.getChildAt(2) as Laya.Text;
            mc.changeText(index);
            name.changeText(data.name);
            bushu.changeText(data.stage3);
        }
    }
}