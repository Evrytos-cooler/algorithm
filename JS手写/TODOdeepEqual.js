// 应该先判断最简单的情况，尽量提前的返回函数
// 通过 memo 函数处理循引用问题
// 步骤
// 1. 原始值判断 （原始 + NaN）
// 2. 类型判断 (String.prototype.toString.call())
// 3. null 判断（null属于object）
// 4. 特殊 type 判断 ( null, date.getTime() ,reg.toString() ,func.toString())
// 下面是object的判断
// 5. 判断属性存在性
// 6. 递归调用继续判断
// 7. return true
function deepEqual(a, b, memo = new WeakMap()) {
	// 快速处理严格相等（包括原始类型、undefined、NaN）
	if (a === b) return a === b
	// NaN
	if (a !== a && b !== b) return true

	// 类型检查
	const typeA = Object.prototype.toString.call(a)
	const typeB = Object.prototype.toString.call(b)
	if (typeA !== typeB) return false

	// 处理 null（typeof null === 'object'）
	if (a === null || b === null) return a === b

	// 处理特殊对象
	switch (typeA) {
		case '[object Date]':
			return a.getTime() === b.getTime()
		case '[object RegExp]':
			return a.toString() === b.toString()
		case '[object Function]':
			return a.toString() === b.toString() // 谨慎处理函数
	}

	// 循环引用检查
	if (typeof a === 'object' && typeof b === 'object') {
		if (memo.has(a) && memo.get(a) === b) return true
		memo.set(a, b)
	}

	// 处理数组和普通对象
	if (typeA !== '[object Array]' && typeA !== '[object Object]') return false // 非对象/数组

	// 属性数量检查
	const keysA = Object.keys(a)
	const keysB = Object.keys(b)
	if (keysA.length !== keysB.length) return false

	// 属性名存在性检查
	for (const key of keysA) {
		if (!Object.prototype.hasOwnProperty.call(b, key)) return false
	}

	// 递归比较属性值
	for (const key of keysA) {
		if (!deepEqual(a[key], b[key], memo)) return false
	}

	return true
}
