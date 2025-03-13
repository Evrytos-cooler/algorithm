async function asyncReduce(array, reducer, initialValue) {
	// 实现代码
}

// 示例用法
const array = [1, 2, 3]
const reducer = async (acc, x) => acc + x
asyncReduce(array, reducer, 0).then(console.log) // 输出 6
