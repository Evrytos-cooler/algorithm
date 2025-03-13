// 利用闭包保存 params - result 对
function memoize(fn) {
	const map = new Map()
	return function (...params) {
		if (map.has(JSON.stringify(params))) return map.get(JSON.stringify(params))
		else {
			const result = fn(...params)
			map.set(JSON.stringify(params), result)
			return result
		}
	}
}

// 示例用法
const expensiveFunction = (a, b) => {
	console.log('Calculating...')
	return a + b
}

const memoizedFunction = memoize(expensiveFunction)
console.log(memoizedFunction(1, 2)) // 输出 "Calculating..." 然后输出 3
console.log(memoizedFunction(1, 2)) // 直接输出 3
