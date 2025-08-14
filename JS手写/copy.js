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

// 1 处理基础类型
// 2 处理循环引用
// 3 处理 RegExp Date Array map set
// 4 处理不可克隆（不便克隆类型） WeakSet WeakMap Function
// 5 保存引用
// 6 递归拷贝
export const deepCopyV2 = (obj, weakMap = new WeakMap()) => {
	if (!obj || typeof obj !== 'object') return obj
	if (weakMap.has(obj)) return weakMap.get(obj)

	let copy = {}
	if (obj instanceof Array) copy = []
	if (obj instanceof RegExp) copy = new RegExp(obj)
	if (obj instanceof Date) copy = new Date(obj)

	// 1. Object.keys 通过直接访问属相表获取键，返回的内容是可迭代的
	// 2. Map / Set 的内容是包装在一个哈希表中的，并不通过对象的属性实现， 所以 Object.keys 无法获取到
	// 3. Map / Set 内部实现了 iteration ，遍历 map / set 的时候实际上在遍历哈希表的内容，所以他们能够直接遍历
	if (obj instanceof Map) copy = new Map(obj)
	if (obj instanceof Set) copy = new Set(obj)
	if (obj instanceof WeakMap) return obj
	if (obj instanceof WeakSet) return obj
	if (obj instanceof Function) return obj
	weakMap.set(obj, copy)

	// map / set
	if (obj instanceof Map) {
		for (let [key, value] of obj) {
			copy.set(deepCopyV2(key, weakMap), deepCopyV2(value, weakMap))
		}
		return copy
	}

	if (obj instanceof Set) {
		for (let value of obj) {
			copy.add(deepCopyV2(value, weakMap))
		}
		return copy
	}

	// object
	for (let key of Object.keys(obj)) {
		copy[key] = deepCopyV2(obj[key], weakMap)
	}
	return copy
}
console.log(deepCopy([1, 2, 3, 4, { a: 1, b: 2 }]))
console.log(shallowCopy([1, 2, 3, 4, 5, { a: 1, b: 2 }]))
