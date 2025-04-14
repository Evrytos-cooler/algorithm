const threeNumeberSumV2 = (arr, target) => {
	if (arr.length < 4) return
	arr = arr.sort((a, b) => a - b) //升序排序
	let i = 0
	const result = []
	while (i < arr.length - 2) {
		let left = i + 1
		let right = arr.length - 1
		while (left < right) {
			const sum = arr[left] + arr[right] + arr[i]
			if (sum < target) left++
			if (sum > target) right--
			if (sum === target) {
				result.push([arr[i], arr[left], arr[right]])
				left++
				right--
				while (arr[left] === arr[left - 1]) left++
				while (arr[right] === arr[right + 1]) right--
			}
		}
		i++
		while (arr[i] === arr[i - 1]) i++
	}
	return result
}
console.log(threeNumeberSumV2([-2, -1, 0, 1, 2, 3], 0))
