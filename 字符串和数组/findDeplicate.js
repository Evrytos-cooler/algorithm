const findDeplicate = arr => {
	//利用抽屉原理
	let left = 0
	let right = arr.length - 1
	while (left < right) {
		const mid = Math.floor((left + right) / 2)
		let count = 0
		for (let i = left; i <= right; i++) {
			if (arr[i] <= mid) count++
		}
		if (count > mid) right = mid
		else {
			left = mid
		}
		if (arr[mid] === arr[mid - 1] || arr[mid] === arr[mid + 1]) return arr[mid]
	}
}

console.log(findDeplicate([1, 1, 2, 3, 4, 5, 6, 7, 9]))
