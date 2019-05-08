/*
* 工具类(繁杂方法);
*/
class Tool
{
        // 确保val介于min和max之间
    public static  getRangedValue(val: number, min: number, max: number): number {
        if (val < min)
            return min;
        else if (val > max)
            return max;
        else
            return val;
    }

    // 返回[min, max)之间的随机数
    public static randNum(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    //一些工具接口
    public static goToURL(url: string) {
        window.location.href = url;
    }

}

