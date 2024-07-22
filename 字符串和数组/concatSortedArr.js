const concatSorted = (arr1, arr2) => {
	const arra = arr1.slice()
	const arrb = arr2.slice()
	const arrc = []
	while (arra.length && arrb.length) {
		if (arra[0] > arrb[0]) {
			arrc.push(arrb.shift())
		} else {
			arrc.push(arra.shift())
		}
	}
	while (arra.length) {
		arrc.push(arra.shift())
	}
	while (arrb.length) {
		arrc.push(arrb.shift())
	}
	return arrc
}
const concatSortedV2 = (arr1, arr2) => {
	const arr3 = arr1.concat(arr2)
	return arr3.sort((a, b) => a - b)
}

const a = [1, 3, 5, 7]
const b = [2, 4, 6, 8]
console.log(concatSortedV2(a, b))
console.log(a, b)
