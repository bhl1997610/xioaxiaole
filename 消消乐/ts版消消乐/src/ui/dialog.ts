module ui {
    export class dialog extends ui.UI.dialogUI {
        private static _instance:dialog
        constructor() {
            super();
            this.btn_close.on(Laya.Event.MOUSE_OUT, this, this.recover)
            this.btn_close.on(Laya.Event.CLICK, this, this.close)
            this.btn_close.on(Laya.Event.MOUSE_OVER, this, this.small, [this.btn_close])
        }
        public static get instance(){
            this._instance=new dialog();
            return this._instance;
        }
        public close() {
            this.parent.removeChild(this);
        }
        public recover() {
            this.btn_close.scale(1, 1);
        }
        public small(btn) {
            btn.scale(0.8, 0.8);
        }
        public remove(){
        this.parent.removeChild(this);
    }
        public loginsucess(){
            Laya.timer.once(1000,this,()=>{
                this.remove();
                let home=ui.home.instance;
                Laya.stage.addChild(home);
                home.playani();
            })
    }
    }
}