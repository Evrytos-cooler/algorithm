function asyncPolling(task, interval, conditionFn) {
	// 实现代码
}

// 示例用法
let count = 0
const task = () =>
	new Promise(resolve => {
		count++
		resolve(count)
	})
const conditionFn = result => result >= 3
asyncPolling(task, 1000, conditionFn).then(console.log) // 输出 3
