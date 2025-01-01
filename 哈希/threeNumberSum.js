const threeNumberSum = (arr, target) => {
	arr = arr.sort((a, b) => a - b)
	let p1 = 0
	let p2 = arr.length - 1
	const result = []
	//遍历外部两个指针并查重
	while (p1 + 1 < p2) {
		let p3 = p1 + 1
		//遍历内部指针并查重
		while (p2 > p3) {
			const sum = arr[p1] + arr[p2] + arr[p3]
			if (sum > target) {
				p2--
			} else if (sum < target) {
				p3++
			} else {
				result.push([arr[p1], arr[p2], arr[p3]])
				p1++
				p2--
				while (arr[p1] === arr[p1 - 1]) {
					p1++
				}
				while (arr[p2] === arr[p2 + 1]) {
					p2--
				}
			}
		}
	}
	return result
}
console.log(threeNumberSum([-1, 3, 6, 0, 1, -6, 2], 0))
