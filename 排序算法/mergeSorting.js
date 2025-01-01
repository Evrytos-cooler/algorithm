//思路，每次都是从中间分割，然后合并，排序阶段是合并阶段
const merge = (arra, arrb) => {
	const res = []
	while (arra.length && arrb.length) {
		if (arra[0] <= arrb[0]) {
			res.push(arra.shift())
		}
		if (arra[0] > arrb[0]) {
			res.push(arrb.shift())
		}
	}
	//处理一边多出来的情况
	while (arra.length) {
		res.push(arra.shift())
	}
	while (arrb.length) {
		res.push(arrb.shift())
	}
	return res
}
const mergeSorting = arr => {
	if (arr.length <= 1) return arr
	const middle = Math.floor(arr.length / 2)
	//左闭右开
	const arra = arr.slice(0, middle)
	const arrb = arr.slice(middle, arr.length)

	//先分
	const sortedA = mergeSorting(arra)
	const sortedB = mergeSorting(arrb)
	//再和
	const res = merge(sortedA, sortedB)
	return res
}

const mergeSortT2 = arr => {
	const merge = (arra, arrb) => {
		let i = 0
		let j = 0
		const result = []
		while (i < arra.length && j < arrb.length) {
			if (arra[i] < arrb[j]) {
				result.push(arra[i])
				i++
			} else {
				result.push(arrb[j])
				j++
			}
		}
		//处理剩余情况
		while (i < arra.length) {
			result.push(arra[i])
			i++
		}
		while (j < arrb.length) {
			result.push(arrb[j])
			j++
		}
		return result
	}

	const partition = arr => {
		if (arr.length <= 1) return arr
		//拆分
		const middle = Math.floor(arr.length / 2)
		//左闭右开
		const part1 = arr.slice(0, middle)
		const part2 = arr.slice(middle, arr.length)
		//递归
		const arr1 = partition(part1)
		const arr2 = partition(part2)
		//合并
		return merge(arr1, arr2)
	}
	return partition(arr)
}

console.log(mergeSortT2([2, 1, 3, 4, 1, 2, 5, 332, 0]))
