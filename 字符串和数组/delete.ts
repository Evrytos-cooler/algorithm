const deleteTarget = <T>(arr: Array<T>, target: T) => {
	let index = 0,
		slowIndex = 0
	while (index < arr.length) {
		if (arr[index] !== target) {
			index++
			slowIndex++
		} else {
			index++
		}
		arr[slowIndex] = arr[index]
	}
	return arr.splice(0, slowIndex)
}
console.log(deleteTarget([1, 2, 3, 4, 5], 3)) // [1, 2, 4, 5]
