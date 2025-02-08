// 保存特殊类型
// 处理循环引用
// 只取本身属性
const deepCopy = (obj, map = new WeakMap()) => {
	//如果是基础类型 ，返回obj
	//如果是特殊类型，创建他的对应对象 (Date,RegExp,Array,Map,Set)
	//防止循环引用, 拷贝过的值放到weakmap中，当再次遇到时，直接返回
	//for in 遍历 obj
	//判断是否是自有属性
	//对自有属性递归调用deepCoye
	let copy = {}
	if (typeof obj !== 'object') return obj
	if (obj instanceof Array) copy = []
	if (obj instanceof Date) copy = new Date(obj)
	if (obj instanceof RegExp) copy = new RegExp(obj)
	if (obj instanceof Function) copy = new Function(obj)
	if (obj instanceof Set) copy = new Set(obj)
	if (obj instanceof Map) copy = new Map(obj)
	if (obj instanceof WeakMap) copy = new WeakMap(obj)
	if (obj instanceof WeakSet) copy = new WeakSet(obj)
	if (!map.has(obj)) {
		map.set(obj, true)
	}
	// for (let key in obj) {
	// 	if (obj.hasOwnProperty(key)) copy[key] = deepCopy(obj[key], map)
	// }
	for (let key of Object.keys(obj)) {
		copy[key] = deepCopy(obj[key], map)
	}
	return copy
}
console.log(deepCopy([1, 2, 3, 4, 5]))
