/*
* name;
*/
class spmove {
    constructor() {

    }
    public static select(sprite: Laya.Sprite, img: Laya.Image): void {
        if (gameData.cursp) {
            for (var i = 64; i < gameData.sparr.length; i++) {
                if (gameData.sparr[i].par == sprite) {
                    var target = gameData.mapdata[i];
                    var targetsp = gameData.sparr[i];
                    var tarindex = i;
                    break;
                }
            }
            var cur = gameData.mapdata[gameData.curindex];

            var dx = Math.abs(target.col - cur.col);
            var dy = Math.abs(target.row - cur.row);

            if ((dx == 1 && dy == 0) || (dy == 1 && dx == 0)) {
                Tween.to(targetsp.par, { x: cur.x, y: cur.y }, 300, Laya.Ease.cubicOut);
                Tween.to(gameData.cursp.par, { x: target.x, y: target.y }, 300, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
                    
                    var t = targetsp;
                    gameData.sparr[tarindex] = gameData.cursp;
                    targetsp = gameData.cursp;
                    gameData.sparr[gameData.curindex] = t;
                    gameData.cursp = t;
                    if (gamelogic.isHaveThree()) {
                        gamelogic.spcleardrop(tarindex);

                    }
                    else {
                        Tween.to(gameData.cursp.par, { x: target.x, y: target.y }, 300, Laya.Ease.cubicOut);
                        Tween.to(targetsp.par, { x: cur.x, y: cur.y }, 300, Laya.Ease.cubicOut, Laya.Handler.create(this, () => {
                            var t = targetsp;
                            gameData.sparr[tarindex] = gameData.cursp;
                            targetsp = gameData.cursp;
                            gameData.sparr[gameData.curindex] = t;
                            gameData.cursp = t;
                            gameData.cursp.img.skin = 'home/e' + gameData.cursp.type + '.png';

                        }, ));

                    }

                }, ));

                return
            }

        }


        img.width = 60;
        img.height = 60;
        let length = gameData.sparr.length;
        for (var i = 64; i < length; i++) {
            var tp = gameData.sparr[i].type;
            if (gameData.sparr[i].par == sprite) {
                img.skin = 'home/e' + tp + 'foucs' + '.png';
                gameData.cursp = gameData.sparr[i];
                gameData.curindex = i;

            }
            else {
                gameData.sparr[i].img.skin = 'home/e' + tp + '.png';
            }

        }


    }
    public static refrsh(target1, target2, ): void {
        Tween.to(target1.par, { x: target2.par.x, y: target2.par.y }, 1000, Laya.Ease.cubicOut);
        Tween.to(target2.par, { x: target1.par.x, y: target1.par.y }, 1000, Laya.Ease.cubicOut);
      
    }

}