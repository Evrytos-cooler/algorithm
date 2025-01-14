const powArraySort = (arr: number[]): number[] => {
	let head = 0
	let tail = arr.length - 1
	const result: number[] = []
	while (head < tail) {
		const headNumber = arr[head] * arr[head]
		const tailNumber = arr[tail] * arr[tail]
		if (headNumber > tailNumber) {
			result.unshift(headNumber)
			head++
		} else {
			result.unshift(tailNumber)
			tail--
		}
	}
	return result
}
const arr = powArraySort([-4, -2, 0, 1, 5])
console.log(arr)
