// sync version
// 节流 -- 控制上限
function syncThrottle(fn, delay) {
	let timer = null
	return (...args) => {
		if (!timer) {
			const result = fn.apply(this, args)
			timer = setTimeout(() => {
				timer = null
			}, delay)
			return result
		}
	}
}
function asyncThrottle(fn, delay) {
	// 实现代码
	let timer = null
	return async (...args) => {
		if (!timer) {
			timer = setTimeout(() => {
				timer = null
			}, delay)
			const reuslt = await fn.apply(this, args)
			return reuslt
		}
		return 'stop'
	}
}

// 示例用法
const fetchData = () => new Promise(resolve => setTimeout(() => resolve('Data'), 500))
const throttledFetch = asyncThrottle(fetchData, 1000)

throttledFetch().then(console.log)
throttledFetch().then(console.log) // 第二次调用会被限制
