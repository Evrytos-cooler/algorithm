function debounce(fn, delay) {
	// 实现代码
}

// 示例用法
const fetchData = () => new Promise(resolve => setTimeout(() => resolve('Data'), 500))
const debouncedFetch = debounce(fetchData, 1000)

debouncedFetch().then(console.log)
debouncedFetch().then(console.log) // 只有最后一次调用会执行
