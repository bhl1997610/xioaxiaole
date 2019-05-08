module ui {
    export class select extends ui.UI.selectUI {
        private static _instance: select;
        public uiManager: UIManager;
        public static self: select;
        constructor() {
            super();
            this.first.on(Laya.Event.CLICK, this, this.firstclcik);
            this.second.on(Laya.Event.CLICK, this, this.secondclcik);
            this.third.on(Laya.Event.CLICK, this, this.thirdclcik);
            let levelData: JSON = Laya.loader.getRes("res/data/l1.json");
            // 适配器
            this.uiManager = new UIManager();
            select.self = this;
        }
        public static get instance() {
            this._instance = new select();
            return this._instance;
        }
        private firstclcik() {
            GameData.curstage=1;
            this.parent.removeChild(this);
            this.uiManager.openUI(UIType.homeView, null, null,[]);
           

        }
        private secondclcik() {
             GameData.curstage=2;
            this.parent.removeChild(this);
            this.uiManager.openUI(UIType.homeView, null, null,[19,20,28,29,24,25,33,34,46,47,55,56,51,52,60,61]);
            
        }
        private thirdclcik() {
             GameData.curstage=3;
            this.parent.removeChild(this);
            this.uiManager.openUI(UIType.homeView, null, null,[30,31,32,39,40,41,48,49,50,10,12,14,16,28,46,64,34,52,70,66,68]);
            
        }
        public remove(){
            this.parent.removeChild(this);
            this.destroy();
        }

    }
}