function asyncCache(fn) {
	// 实现代码
	const cache = new Map()
	return async (...arg) => {
		if (!cache.get(arg.join())) {
			const result = await fn(...arg)
			cache.set(arg.join(), result)
			return result
		} else {
			return cache.get(arg.join())
		}
	}
}

// 示例用法
const fetchData = async key => {
	console.log('Fetching data for:', key)
	return key.toUpperCase()
}
const cachedFetch = asyncCache(fetchData)
cachedFetch('a')
	.then(console.log)
	.then(() => cachedFetch('a').then(console.log))
