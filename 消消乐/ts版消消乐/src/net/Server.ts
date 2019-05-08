module net {
    export class Server extends Laya.EventDispatcher {
        public _socket: Laya.Socket;
        private _uid: number;
        private _nickname: string;
        private _connectReady: boolean = false;//通讯状态
        private static _instance: Server;
        public static self: Server;
        constructor() {
            super();
            this._socket = new Laya.Socket();
            this._socket.endian = Laya.Socket.BIG_ENDIAN;
            this._socket.on(Laya.Event.OPEN, this, this.onSocketOpen);
            this._socket.on(Laya.Event.CLOSE, this, this.onSocketClose);
            this._socket.on(Laya.Event.MESSAGE, this, this.onMessageReveived);
            this._socket.on(Laya.Event.ERROR, this, this.onConnectError);
            net.Server.self = this;
        }
        public static get instance() {
            this._instance = new Server();
            return this._instance;
        }
        public logout() {
            this._socket.close();
        }
        public sendmsg(msg: string) {
            this._socket.send(msg);
        }
        public connect() {
            let addr = "ws://localhost:3000";
            this._socket.connectByUrl(addr);
        }
        public onSocketOpen() {
            console.log("socket connect")
            let msg = '{ "head":"paihangbang" }';
            this._socket.send(msg);
        }
        public onSocketClose() {
            console.log("socket close");
            //派发事件
            GameData.token = false;

        }
        public onMessageReveived(msg) {
            // TODO登录成功

            let dialog = ui.dialog.instance;
            let login = ui.login.instance;
            console.log("socket message");
            switch (msg) {
                case "登录成功":
                    dialog.gametext.text = "登录成功";
                    GameData.token = true;
                    Laya.stage.addChild(dialog);
                    GameData.nickname = login.username.text;
                    for (let i = 0; i < GameData.phdata2.length; i++) {
                        if (GameData.phdata2[i].name == GameData.nickname) {
                            GameData.first = GameData.phdata2[i].stage1;
                            GameData.second = GameData.phdata2[i].stage2;
                            GameData.third = GameData.phdata2[i].stage3;
                        }
                    }
                    login.remove();
                    dialog.loginsucess();
                    break;
                case "登录失败":
                    dialog.gametext.text = "登录失败";
                    Laya.stage.addChild(dialog);
                    break;
                case "已存在用户名":
                    dialog.gametext.text = "已存在用户名";
                    Laya.stage.addChild(dialog);
                    break;
                case "注册成功":
                    dialog.gametext.text = "注册成功";
                    Laya.stage.addChild(dialog);
                    break;
                default:
                    GameData.phdata = msg.split("-");
                    GameData.phdata.pop();
                    let newarr1 = [];
                    let newarr2 = [];
                    let newarr3 = [];
                    for (let i = 0; i < GameData.phdata.length; i++) {
                        newarr1.push(JSON.parse(GameData.phdata[i]));
                        newarr2.push(JSON.parse(GameData.phdata[i]));
                        newarr3.push(JSON.parse(GameData.phdata[i]));
                    }
                    newarr1.sort((a, b) => {
                        return a.stage1 - b.stage1
                    })
                    GameData.phdata1 = newarr1;
                    newarr2.sort((a, b) => {
                        return a.stage2 - b.stage2
                    })
                    GameData.phdata2 = newarr2;
                    newarr3.sort((a, b) => {

                        return a.stage3 - b.stage3
                    })
                    GameData.phdata3 = newarr3;
                    if(GameData.nickname){
                        for (let i = 0; i < GameData.phdata2.length; i++) {
                        if (GameData.phdata2[i].name == GameData.nickname) {
                            GameData.first = GameData.phdata2[i].stage1;
                            GameData.second = GameData.phdata2[i].stage2;
                            GameData.third = GameData.phdata2[i].stage3;
                        }
                    }
                }

                ui.paihang.instance;
                ui.paihang.self.init();
                    break;

            }


        }
        public onConnectError() {
            this.event("CONNECT_ERROR");
            GameData.token = false;

        }

    }

}
