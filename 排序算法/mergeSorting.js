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
console.log(mergeSorting([2, 1, 3, 4, 1, 2, 5, 332, 0]))
