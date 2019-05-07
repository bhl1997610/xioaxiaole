/*
* name;
*/
class gamelogic {
    constructor() {

    }
    public static isHaveThree(): boolean {
        var cnum = 1;
        var rnum = 1;
        var drop = [];
        for (var i = 8; i < 16; i++) {
            cnum = 1;
            for (var j = 1; j < 8; j++) {
                var index = j + i * 8;

                if (gameData.sparr[index].type == gameData.sparr[index - 1].type) {
                    cnum++;
                    if (index % 8 == 7) {
                        if (cnum >= 3) {
                            for (var k = 0; k < cnum; k++) {
                                gameData.cleararr.push({ sp: gameData.sparr[index - k], pos: gameData.mapdata[index - k] });
                                gameData.sparr[index - k].use = false;
                            }
                            cnum = 1;
                            continue;

                        }
                    }
                }
                else {

                    if (cnum >= 3) {
                        for (var k = 1; k <= cnum; k++) {
                            gameData.cleararr.push({ sp: gameData.sparr[index - k], pos: gameData.mapdata[index - k] });
                            gameData.sparr[index - k].use = false;
                        }
                        cnum = 1;
                        continue;

                    }
                    else {
                        cnum = 1;
                        continue;

                    }

                }


            }
        }
        for (var i = 0; i < 8; i++) {
            rnum = 1;
            for (var j = 9; j < 16; j++) {
                var index = i + j * 8;

                if (gameData.sparr[index].type == gameData.sparr[index - 8].type) {
                    rnum++;
                    if (index > 119) {
                        if (rnum >= 3) {
                            for (var k = 0; k < rnum; k++) {

                                gameData.cleararr.push({ sp: gameData.sparr[index - k * 8], pos: gameData.mapdata[index - 8 * k] });
                                gameData.sparr[index - k * 8].use = false;

                            }
                            rnum = 1;
                            continue;

                        }
                    }

                }
                else {

                    if (rnum >= 3) {
                        for (var k = 1; k <= rnum; k++) {
                            gameData.cleararr.push({ sp: gameData.sparr[index - k * 8], pos: gameData.mapdata[index - 8 * k] });
                            gameData.sparr[index - k * 8].use = false;

                        }
                        rnum = 1;
                        continue;

                    }
                    rnum = 1;
                    continue;
                }


            }
        }
        if (gameData.cleararr.length) {
            for (var i = 0; i < gameData.cleararr.length - 1; i++) {
                for (var j = i + 1; j < gameData.cleararr.length; j++) {
                    if (gameData.cleararr[i].sp.par == gameData.cleararr[j].sp.par) {
                        gameData.cleararr.splice(i, 1);
                    }
                }

            }
            for (var i = 0; i < gameData.cleararr.length; i++) {
                var id = gameData.cleararr[i].pos.col + gameData.cleararr[i].pos.row * 8;
                drop.push({ index: id, dele: false });

            }
            for (var i = 0; i < drop.length; i++) {
                for (var j = 0; j < drop.length; j++) {
                    if (drop[i].index + 8 == drop[j].index) {
                        drop[i].dele = true;
                    }
                }

            }

            for (var j = 0; j < drop.length; j++) {
                if (!drop[j].dele) {
                    gameData.dropindex.push(drop[j].index);
                }
            }


            return true;
        }
        else {
            return false;
        }

    }
    public static newsp(): void {
        for (var i = 0; i < gameData.sparr.length; i++) {
            if (gameData.sparr[i] == "") {
                var sprite = new Laya.Sprite;
                sprite.x = gameData.mapdata[i].x;
                sprite.y = gameData.mapdata[i].y;
                sprite.visible = false;
                gameData.sp.addChild(sprite);
                var img = new Laya.Image;
                img.x = 5;
                img.y = 5;
                var type = Math.floor(Math.random() * 5);
                img.skin = "home/e" + type + ".png";
                sprite.addChild(img);
                gameData.sparr[i] = { par: sprite, img: img, type: type, use: true };
                img.on("click", this, spmove.select, [sprite, img])
            }
        }
    }
    public static spcleardrop(tarindex?: number): void {
        for (var i = 0; i < gameData.cleararr.length; i++) {
           
            // gameData.cleararr[i].pos.ani.visible=true;
            // gameData.cleararr[i].pos.ani.play(0,false);
            
            Tween.to(gameData.cleararr[i].sp.par, { scaleX: 1.2, scaleY: 1.2, alpha: 0 }, 800, Laya.Ease.cubicOut, Laya.Handler.create(this, function () {

                for (var j = 0; j < gameData.cleararr.length; j++) {
                    gameData.cleararr[j].sp.par.destroy();
                }
                gameData.cleararr = [];
            }));

            gameData.cursp = "";
            if (tarindex) {
                gameData.sparr[tarindex].img.skin = 'home/e' + gameData.sparr[tarindex].type + '.png';
            }

        }

        for (var i = 0; i < gameData.dropindex.length; i++) {
            var id = gameData.dropindex[i];
            var delenum = 0;
            for (var j = gameData.dropindex[i]; j >= 0; j -= 8) {

                if (gameData.sparr[j].use) {
                    if (id > 63) {
                        gameData.sparr[j].par.visible = true;
                    }

                    Tween.to(gameData.sparr[j].par, { x: gameData.mapdata[id].x, y: gameData.mapdata[id].y }, 800, Laya.Ease.cubicOut);
                    gameData.sparr[id] = gameData.sparr[j];
                    id -= 8;

                }
                else {
                    delenum++;
                }
                if (j < 8) {
                    for (var k = 0; k < delenum; k++) {
                        gameData.sparr[j + k * 8] = "";
                    }
                }
            }

        }


        gamelogic.newsp();
        Laya.timer.once(500, this, function () {

            if (gamelogic.isHaveThree()) {
                 gamelogic.spcleardrop();
            }
            else if (!ishavelink.ishavelink()) {
                console.log("刷新")
                for (var i = 0; i < 32; i++) {
                    gameData.newarr[i] = gameData.sparr[i + 96];
                }
                gameData.newarr.sort((a, b) => { return -1 });
                for (var i = 64; i < 96; i++) {
                    for (var k = 96; k < gameData.sparr.length; k++) {
                        if (gameData.newarr[i - 64].par == gameData.sparr[k].par) {
                            spmove.refrsh(gameData.newarr[i - 64], gameData.sparr[i]);
                            var t = gameData.sparr[i];
                            gameData.sparr[k] = t;
                            gameData.sparr[i] = gameData.newarr[i - 64];
                        }
                    }
                }
                gameData.newarr=[];
                if (gamelogic.isHaveThree()) {
                   gamelogic.spcleardrop();
                }
            }
            else {
                return;
            }
        })

    }
}