function PromiseWithTimeout(promise, timeout) {
	// 实现代码
}

// 示例用法
const fetchData = new Promise(resolve => setTimeout(() => resolve('Data'), 2000))
PromiseWithTimeout(fetchData, 1000)
	.then(console.log)
	.catch(error => console.error(error)) // 输出超时错误
