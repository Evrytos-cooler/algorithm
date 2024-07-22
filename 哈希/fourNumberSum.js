var fourSum = function (nums, target) {
	if (nums.length < 4) return []
	const targetList = new Map()
	let result = []
	let set = new Set()

	for (let index1 = 0; index1 < nums.length - 1; index1++) {
		for (let index2 = index1 + 1; index2 < nums.length; index2++) {
			const value1 = nums[index1]
			const value2 = nums[index2]
			const key = target - (value1 + value2)
			const temp = targetList.has(key) ? targetList.get(key) : new Array()

			temp.push([index1, index2])
			targetList.set(key, temp)
		}
	}
	for (let index3 = 0; index3 < nums.length - 1; index3++) {
		for (let index4 = index3 + 1; index4 < nums.length; index4++) {
			const value3 = nums[index3]
			const value4 = nums[index4]

			const key = value3 + value4
			if (targetList.has(key)) {
				//遍历和查中
				for (let [index1, index2] of targetList.get(key)) {
					if (
						index1 !== index3 &&
						index1 !== index4 &&
						index2 !== index3 &&
						index2 !== index4
					) {
						let tuple = [
							nums[index1],
							nums[index2],
							nums[index3],
							nums[index4],
						].sort((a, b) => a - b)
						let tupleStr = JSON.stringify(tuple)
						if (!set.has(tupleStr)) {
							result.push(tuple)
							set.add(tupleStr)
						}
					}
				}
			}
		}
	}
	return result
}

//双指针法
const fourSumTwinPoint = (arr, target) => {
	//特殊情况处理
	if (arr.length < 4) return []
	let p1 = 0
	let p2 = arr.length - 1
	const result = []
	arr = arr.sort((a, b) => a - b)
	//遍历外部两个指针
	while (p1 + 1 < p2 - 1) {
		let p3 = p1 + 1
		let p4 = p2 - 1
		//遍历内部指针并查重（ 三种情况）
		while (p3 < p4) {
			const sum = arr[p1] + arr[p2] + arr[p3] + arr[p4]
			if (sum < target) {
				p3++
			} else if (sum > target) {
				p4--
			} else {
				result.push([arr[p1], arr[p2], arr[p3], arr[p4]])
				//然后同时移动左和右
				p3++
				p4--
				while (arr[p3] === arr[p3 - 1]) p3++
				while (arr[p4] === arr[p4 + 1]) p4--
			}
		}
		//遍历外部指针并查重
		p1++
		p2--
		if (p1 > 0) {
			while (arr[p1] === arr[p1 - 1]) {
				p1++
			}
			while (arr[p2] == arr[p2 + 1]) {
				p2--
			}
		}
	}
	return result
}
console.log(fourSumTwinPoint([1, 0, -1, 0, -2, 2], 0))
