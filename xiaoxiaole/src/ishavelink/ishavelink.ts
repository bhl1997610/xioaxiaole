/*
* name;
*/
class ishavelink {
    constructor() {

    }
    /**
     * 保证开局没有3连 bug
     * 
     */
    public static gameInit(): void {

        var xnum = 1;
        var ynum=1;

        for (var i = 8; i < 16; i++) {
            for (var j = 1; j < 8; j++) {
                var index = j + i * 8;
                if (gameData.sparr[index]) {
                    if (gameData.sparr[index].type == gameData.sparr[index - 1].type) {
                        xnum++;
                        if (xnum == 3) {
                            var type = [0, 1, 2, 3, 4];
                            type.splice(type.indexOf(gameData.sparr[index].type),1);
                            var rand = type[Math.floor(Math.random() * 4)];
                            gameData.sparr[index].img.skin = "home/e" + rand + ".png";
                            gameData.sparr[index].type = rand;
                            xnum = 1;

                        }


                    }
                    else {
                        xnum=1;
                        continue;
                    }
                    
                }
            if(j==7){
                        xnum=1
                    }
            }
        }
     
        for (var i = 0; i < 8; i++) {
            for (var j = 9; j < 16; j++) {
                var index = i + j * 8;
                if (gameData.sparr[index]) {

                    if (gameData.sparr[index].type == gameData.sparr[index - 8].type) {
                        ynum++;
                        if (ynum == 3) {
                            var type = [0, 1, 2, 3, 4];
                            type.splice(type.indexOf(gameData.sparr[index].type), 1);
                            if(i==7){
                                 type.splice(type.indexOf(gameData.sparr[index-1].type), 1);
                            }
                           else{
                               type.splice(type.indexOf(gameData.sparr[index+1].type), 1);
                           }
                            var rand =type[Math.floor(Math.random() * 3)] ;
                            gameData.sparr[index].img.skin = "home/e" + rand + ".png";
                            gameData.sparr[index].type = rand;
                            ynum = 1;
                        }


                    }
                    else {
                        ynum=1;
                        continue;
                    }
                   
                }
             if(j==15){
                        ynum=1;
                    } 
            }
        }
   
    }
    public static skin(img: Laya.Image): number {
        var type = Math.floor(Math.random() * 5);
        img.skin = "home/e" + type + ".png";
        return type;
    }
    /**
     * 开局保证有消除
     */
    public static ishavelink(): boolean {

        var num = 1;

        for (var i = 8; i < 16; i++) {
            for (var j = 1; j < 8; j++) {
                var index = j + i * 8;
                if (gameData.sparr[index].type == gameData.sparr[index - 1].type) {

                    num++;
                    if (num == 2) {
                        if (gameData.sparr[index + 2]) {
                            if (gameData.sparr[index + 2].type == gameData.sparr[index].type) {
                                return true;
                            }
                        }
                        if (gameData.sparr[index + 9]) {
                            if (gameData.sparr[index + 9].type == gameData.sparr[index].type) {
                                return true;
                            }
                        }
                        if (gameData.sparr[index + 6]) {
                            if (gameData.sparr[index + 6].type == gameData.sparr[index].type) {
                                return true;
                            }
                        }
                        if (gameData.sparr[index - 10]) {
                            if (gameData.sparr[index - 10].type == gameData.sparr[index].type) {
                                return true;
                            }
                        }
                        if (gameData.sparr[index - 7]) {
                            if (gameData.sparr[index - 7].type == gameData.sparr[index].type) {
                                return true;
                            }
                        }
                        if (gameData.sparr[index - 3]) {
                            if (gameData.sparr[index - 3].type == gameData.sparr[index].type) {
                                return true;
                            }
                        }
                        num = 1;
                    }

                }



            }
        }
        for (var i = 0; i < 8; i++) {
            for (var j = 9; j < 16; j++) {
                var index = i + j * 8;
                if (gameData.sparr[index].type == gameData.sparr[index - 8].type) {

                    num++;
                    if (num == 2) {
                        if (gameData.sparr[index + 9]) {
                            if (gameData.sparr[index + 9].type == gameData.sparr[index].type) {
                                return true;
                            }
                        }
                        if (gameData.sparr[index + 15]) {
                            if (gameData.sparr[index + 15].type == gameData.sparr[index].type) {
                                return true;
                            }
                        }
                        if (gameData.sparr[index + 7]) {
                            if (gameData.sparr[index + 7].type == gameData.sparr[index].type) {
                                return true;
                            }
                        }
                        if (gameData.sparr[index - 24]) {
                            if (gameData.sparr[index - 24].type == gameData.sparr[index].type) {
                                return true;
                            }
                        }
                        if (gameData.sparr[index - 17]) {
                            if (gameData.sparr[index - 17].type == gameData.sparr[index].type) {
                                return true;
                            }
                        }
                        if (gameData.sparr[index - 15]) {
                            if (gameData.sparr[index - 15].type == gameData.sparr[index].type) {
                                return true;
                            }
                        }
                        num = 1;

                    }

                }

            }
        }
        for (var i = 8; i < 14; i++) {
            for (var j = 0; j < 8; j++) {
                var index = j + i * 8;

                if (gameData.sparr[index].type == gameData.sparr[index + 2].type) {
                    if (gameData.sparr[index + 9]) {
                        if (gameData.sparr[index].type == gameData.sparr[index + 9].type) {
                            return true;
                        }
                    }
                    if (gameData.sparr[index - 7]) {
                        if (gameData.sparr[index].type == gameData.sparr[index - 7].type) {
                            return true;
                        }
                    }

                }
            }

        }
        for (var i = 0; i < 6; i++) {
            for (var j = 8; j < 16; j++) {
                var index = i + j * 8;

                if (gameData.sparr[index].type == gameData.sparr[index + 16].type) {
                    if (gameData.sparr[index + 9]) {
                        if (gameData.sparr[index].type == gameData.sparr[index + 9].type) {
                            return true;
                        }
                    }
                    if (gameData.sparr[index + 7]) {
                        if (gameData.sparr[index].type == gameData.sparr[index + 7].type) {
                            return true;
                        }
                    }

                }
            }

        }
        return false;
    }


}