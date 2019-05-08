module ui{
    export class  gameover extends ui.UI.resultUI{
        private static _instance:gameover;
        constructor() {
            super();
            this.queding.on(Laya.Event.CLICK,this,this.click)
        }
        public static get instance(){
            this._instance=new gameover();
            return this._instance;
        }
        public click(){
            this.parent.removeChild(this);
            ui.select.self.uiManager.hideUI(UIType.homeView);
            homeView.instance.close();
            GameData.isgameover=false;
        }
    }
}