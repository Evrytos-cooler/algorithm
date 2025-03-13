function throttle(fn, delay) {
	// 实现代码
}

// 示例用法
const fetchData = () => new Promise(resolve => setTimeout(() => resolve('Data'), 500))
const throttledFetch = throttle(fetchData, 1000)

throttledFetch().then(console.log)
throttledFetch().then(console.log) // 第二次调用会被限制
