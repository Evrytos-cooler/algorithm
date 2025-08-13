// 同步的 reduce
function syncReduce(array, reducer, initialValue) {
	// '??' 是表示空值 null , undefine，而 "||" 是表示假值 0 '' false null undefined
	let init = initialValue ?? array[0]
	const startIndex = initialValue === undefined ? 1 : 0
	for (let i = startIndex; i < array.length; i++) {
		init = reducer(init, array[i])
	}
	return init
}

async function asyncReduce(array, reducer, initialValue) {
	// 实现代码
	let init = initialValue ?? array[0]
	const startIndex = initialValue === undefined ? 1 : 0
	for (let i = startIndex; i < array.length; i++) {
		const item = array[i]
		init = await reducer(init, item)
	}
	return init
}

// 示例用法
const array = [1, 2, 3]
const reducer = async (acc, x) => acc + x
const reducerSync = (acc, x) => acc + x
asyncReduce(array, reducer, 1).then(console.log)
asyncReduce(array, reducer).then(console.log)
// console.log(syncReduce(array, reducerSync, 0))
// console.log(syncReduce(array, reducerSync))
