async function asyncMap(array, mapper) {
	// 实现代码
	const result = []
	array.forEach(async (item, i) => {
		result[i] = await mapper(item)
	})
	return result
}

// 示例用法
const array = [1, 2, 3]
const mapper = async x => x * 2
asyncMap(array, mapper).then(console.log) // 输出 [2, 4, 6]
