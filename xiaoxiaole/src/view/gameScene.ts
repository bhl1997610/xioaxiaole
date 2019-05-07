/*
* name;
*/
import Tween = Laya.Tween;

class gameScene {
    private row: number = 0;//行
    private col: number = 0;//列
    private bgcell: Laya.Sprite;
    constructor() {
        this.init();
    }
    private init(): void {
        this.bgcell = new Laya.Sprite;
        Laya.stage.addChild(this.bgcell);
        gameData.sp = new Laya.Sprite;
        Laya.stage.addChild(gameData.sp);
        for (var i = 0; i < 128; i++) {
            this.createNode(i);
        }
        ishavelink.gameInit();

        if (!ishavelink.ishavelink()) {
            console.log("刷新")
            for (var i = 0; i < 32; i++) {
                gameData.newarr[i] = gameData.sparr[i + 96];
            }
            gameData.newarr.sort((a, b) => { return -1 });

            for (var i = 64; i < 96; i++) {
                for (var j = 96; j < gameData.sparr.length; j++) {
                    if (gameData.newarr[i - 64].par == gameData.sparr[j].par) {
                        spmove.refrsh(gameData.newarr[i - 64], gameData.sparr[i]);
                        var t = gameData.sparr[i];
                        gameData.sparr[j] = t;
                        gameData.sparr[i] = gameData.newarr[i - 64];
                    }
                }
            }
            gameData.newarr = [];
            if (gamelogic.isHaveThree()) {
                Laya.timer.once(800, this, gamelogic.spcleardrop);
            }
        }





    }
    private createNode(i: number): void {
        if (i > 63) {
            var node = new Laya.Image;
            node.skin = "home/elementbg1.png"
            node.x = 40 + 70 * this.col;
            node.y = 70 * this.row;
            node.width = 70;
            node.height = 70;
            this.bgcell.addChild(node);
            // var ani:Laya.Animation=new Laya.Animation;
            // ani.loadAnimation("dele.ani");
            // this.bgcell.addChild(ani);
            // ani.pos(node.x+8,node.y+8);
            // ani.visible=false;
        }
        var sprite = new Laya.Sprite;
        sprite.x = 40 + 70 * this.col;
        sprite.y = 70 * this.row;
        if (i < 64) {
            sprite.visible = false;

        }
        gameData.sp.addChild(sprite);
        var img = new Laya.Image;
        img.skin = "home/e1.png";
        var type = ishavelink.skin(img);
      
        img.x = 5;
        img.y = 5;
        img.on("click", this, spmove.select, [sprite, img])
        sprite.addChild(img);
        gameData.mapdata.push({ col: this.col, row: this.row, x: sprite.x, y: sprite.y });
        gameData.sparr.push({ par: sprite, img: img, type: type, use: true});
        this.col++;
        if (this.col == 8) {
            this.row++;
            this.col = 0;
        }
    }
}
