// Promise All 没有直接阻滞的快，因为 promiseAll 实际上微任务也是串行的
async function asyncMap(array, mapper) {
	const now = performance.now()
	// 实现代码
	const result = []
	array.forEach(async (item, i) => {
		result[i] = await mapper(item)
	})
	console.log('sequential', performance.now() - now)
	// sequential 0.039041996002197266
	return result
}

async function asyncMapConcurrent(array, mapper) {
	const promiseList = []
	const now = performance.now()
	array.forEach((item, i) => {
		promiseList.push(mapper(item, i))
	})
	return Promise.all(promiseList).then(res => {
		console.log('concurrent', performance.now() - now)
		// concurrent 0.524791955947876
		return res
	})
}

// 示例用法
const array = [1231231321, 12312312312312, 1231231231]
const mapper = async x => x ** 10
asyncMap(array, mapper).then(console.log) // 输出 [2, 4, 6]
asyncMapConcurrent(array, mapper).then(console.log) // 输出 [2, 4, 6]
