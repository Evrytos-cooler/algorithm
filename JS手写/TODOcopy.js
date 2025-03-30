// 浅拷贝
// 不需要递归执行，只拷贝一层
export const shallowCopy = obj => {
	if (typeof obj !== 'object' || obj === null) return
	const copy = Array.isArray(obj) ? [] : {}
	for (let key of Object.keys(obj)) {
		copy[key] = obj[key]
	}
	return copy
}
// 保存特殊类型
// 处理循环引用
// 只取本身属性
// 步骤
// 1. 处理原始类型（直接返回）
// 2. 处理特殊object拷贝(Date,func,Reg,set,map,weakset,weakmap, 使用new XXX(obj))
// 3. 处理循环引用
// 4. 迭代处理内容 object / Array
export const deepCopy = (obj, map = new WeakMap()) => {
	//如果是基础类型 ，返回obj
	//如果是特殊类型，创建他的对应对象 (Date,RegExp,Array,Map,Set)
	//防止循环引用, 拷贝过的值放到weakmap中，当再次遇到时，直接返回
	//for in 遍历 obj
	//判断是否是自有属性
	//对自有属性递归调用deepCoye
	if (map.has(obj)) return map.get(obj)
	let copy = {}
	if (typeof obj !== 'object' || !obj) return obj
	if (obj instanceof Array) copy = []
	if (obj instanceof Date) copy = new Date(obj)
	if (obj instanceof RegExp) copy = new RegExp(obj)
	if (obj instanceof Function) copy = obj // function 直接引用？ 保留作用域和闭包
	if (obj instanceof Set) copy = new Set(obj) // 这里需要继续遍历
	if (obj instanceof Map) copy = new Map(obj) // 这里需要继续遍历
	if (obj instanceof WeakMap) copy = new WeakMap(obj) // 这里需要继续遍历
	if (obj instanceof WeakSet) copy = new WeakSet(obj) // 这里需要继续遍历
	if (!map.has(obj)) {
		map.set(obj, copy)
	}
	// for (let key in obj) {
	// 	if (obj.hasOwnProperty(key)) copy[key] = deepCopy(obj[key], map)
	// }
	for (let key of Object.keys(obj)) {
		copy[key] = deepCopy(obj[key], map)
	}
	return copy
}
console.log(deepCopy([1, 2, 3, 4, { a: 1, b: 2 }]))
console.log(shallowCopy([1, 2, 3, 4, 5, { a: 1, b: 2 }]))
