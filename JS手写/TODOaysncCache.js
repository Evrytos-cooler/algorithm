function asyncCache(fn) {
	// 实现代码
}

// 示例用法
const fetchData = async key => {
	console.log('Fetching data for:', key)
	return key.toUpperCase()
}
const cachedFetch = asyncCache(fetchData)
cachedFetch('a').then(console.log) // 输出 "Fetching data for: a" 然后输出 "A"
cachedFetch('a').then(console.log) // 直接输出 "A"
