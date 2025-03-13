function memoize(fn) {
	// 实现代码
}

// 示例用法
const expensiveFunction = (a, b) => {
	console.log('Calculating...')
	return a + b
}

const memoizedFunction = memoize(expensiveFunction)
console.log(memoizedFunction(1, 2)) // 输出 "Calculating..." 然后输出 3
console.log(memoizedFunction(1, 2)) // 直接输出 3
