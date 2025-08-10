// 先分再合，合并的地方排序是归并

const mergeSort = arr => {
	const merge = (arr1, arr2) => {
		const result = []
		while (arr1.length !== 0 && arr2.length !== 0) {
			if (arr1[0] >= arr2[0]) {
				result.push(arr2.shift())
			}
			if (arr1[0] < arr2[0]) {
				result.push(arr1.shift())
			}
		}
		while (arr1.length !== 0) {
			result.push(arr1.shift())
		}
		while (arr2.length !== 0) {
			result.push(arr2.shift())
		}
		return result
	}

	const partition = arr => {
		if (arr.length <= 1) return arr
		const middle = Math.floor(arr.length / 2)
		const left = arr.slice(0, middle)
		const right = arr.slice(middle, arr.length)
		const sortedLeft = partition(left)
		const sortedRight = partition(right)
		return merge(sortedLeft, sortedRight)
	}

	return partition(arr)
}

const mergeSortV2 = arr => {
	const merge = (arra, arrb) => {
		const res = []
		let i = 0,
			j = 0
		while (i < arra.length && j < arrb.length) {
			if (arra[i] > arrb[j]) {
				res.push(arrb[j])
				j++
			} else if (arrb[j] >= arra[i]) {
				res.push(arra[i])
				i++
			}
		}
		while (i < arra.length) {
			res.push(arra[i])
			i++
		}
		while (j < arrb.length) {
			res.push(arrb[j])
			j++
		}
		return res
	}
	const partition = arr => {
		if (arr.length <= 1) return arr
		const middle = Math.floor(arr.length / 2)
		const arra = partition(arr.slice(0, middle))
		const arrb = partition(arr.slice(middle, arr.length))
		return merge(arra, arrb)
	}
	return partition(arr)
}
const res = mergeSortV2([9, 1, 3, 1, 4])
const res1 = mergeSort([9, 1, 3, 1, 4])
console.log(res)
console.log(res1)
