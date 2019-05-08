module ui {
    export class home extends ui.UI.homeUI {
        private static _instance: home;
      
      
        constructor() {
            super()
            this.gamestart.on(Laya.Event.CLICK, this, this.start);
            this.paihang.on(Laya.Event.CLICK, this, this.paihangclick)
            this.gamestart.on(Laya.Event.MOUSE_OUT, this, this.reover);
            this.paihang.on(Laya.Event.MOUSE_OUT, this, this.reover)
            this.gamestart.on(Laya.Event.MOUSE_MOVE, this, this.small,[this.gamestart]);
            this.paihang.on(Laya.Event.MOUSE_MOVE, this, this.small,[this.paihang])

        }
        public static get instance() {
            this._instance = new home()
            return this._instance;
        }
        public playani() {
            this.ani1.play(0, false);


        }
        public start() {
            
            this.gamestart.scale(0.8, 0.8);
            if (GameData.token) {
                this.ani2.play(0, false);
                this.gamestart.mouseEnabled=false;
                this.paihang.mouseEnabled=false;
                Laya.Tween.to(GameMain.Instance.gametext, { alpha: 0 }, 1000)
                Laya.timer.once(1000, this, () => {
                    this.parent.removeChild(this);
                    Laya.stage.addChild(ui.select.instance);
                    this.destroy()
                  
                })
            } 

        }
        public paihangclick() {
            this.paihang.scale(0.8, 0.8);
            if (GameData.token) {
                this.ani2.play(0, false);
                this.gamestart.mouseEnabled=false;
                this.paihang.mouseEnabled=false;
                Laya.Tween.to(GameMain.Instance.gametext, { alpha: 0 }, 1000)
                Laya.timer.once(1000, this, () => {
                    this.parent.removeChild(this);
                    this.destroy();
                    Laya.stage.addChild(ui.paihang.self)

                })

            } 
        }
        public reover(){
            this.gamestart.scale(1,1);
             this.paihang.scale(1,1);
        }
        public small(btn){
            btn.scale(0.8,0.8);
        }

    }
}
