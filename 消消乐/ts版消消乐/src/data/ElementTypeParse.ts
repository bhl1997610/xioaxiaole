
	
/**
 * 元素类型解析类
 * 当前关卡出现的元素类型
 */	
class ElementTypeParse {
	//传入元素类型的数组。赋值给gamedata类中的元素类型
	public static creatElementTypeData(val:Array<number>):void{
		GameData.elementTypes =val;	
		
	}
}