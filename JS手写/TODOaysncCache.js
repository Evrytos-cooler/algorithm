function asyncCache(fn) {
	// 实现代码
	let map = new Map()
	return async function (key) {
		if (map.has(key)) {
			console.log('use cache')
			return map.get(key)
		} else {
			// 不能这样写，这样会导致缓存失效，因为相当于在微任务队列中执行了 set key
			const promise = fn(key).catch(e => {
				map.delete(key)
				throw e
			})
			// 缓存的是一个 promise
			map.set(key, promise)
			return promise
		}
	}
}

// 示例用法
const fetchData = async key => {
	console.log('Fetching data for:', key)
	return key.toUpperCase()
}
const cachedFetch = asyncCache(fetchData)
cachedFetch('a').then(console.log) // 输出 "Fetching data for: a" 然后输出 "A"
cachedFetch('a').then(console.log) // 直接输出 "A"
