//深拷贝
//简单实现 : 问题： 循环应用？ 函数？ 正则？ 日期？ undefined？ Map？ set？都不行
const deepCopyV1 = obj => {
	return JSON.parse(JSON.stringify(obj))
}

//递归实现：解决上面的问题；
// 1.循环引用（用一个weakMap记录已经转换的Value）
// 2.拷贝特殊对象（Date，RegExp，Function，Map，Set）用Object.prototype.toString.call()
const deepCopyV2 = (obj, map = new WeakMap()) => {
	//处理不需要执行的情况 (基础类型)
	if (!(obj instanceof Object) || !obj) {
		return obj
	}

	let copy = {}
	//处理遍历情况:特殊处理正则/日期等类型和数组 , 还有函数等等
	if (obj instanceof RegExp) {
		return new RegExp(ob)
	}
	if (obj instanceof Date) {
		return new Date(obj)
	}
	if (obj instanceof Array) {
		copy = []
	}

	//防止循环引用栈溢出
	if (map.get(obj)) {
		return obj
	}
	map.set(obj, true)

	//主体部分，是一个递归
	for (let value in obj) {
		if (obj.hasOwnProperty(value)) {
			copy[value] = deepCopyV2(obj[value], map)
		}
	}

	return copy
}

console.log(deepCopyV2([1, 2, 3, 4, 5]))

const deepCopy = (obj, map = new WeakMap()) => {
	//如果是基础类型 ，返回obj
	//如果是特殊类型，创建他的对应对象 (Date,RegExp,Array,Map,Set)
	//防止循环引用, 拷贝过的值放到weakmap中，当再次遇到时，直接返回
	//for in 遍历 obj
	//判断是否是自有属性
	//对自有属性递归调用deepCoye
	copy[key] = deepCopy(obj[key], map)
}
