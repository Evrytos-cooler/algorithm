const generateSpiral = n => {
	const arr = new Array(n).fill().map(() => new Array(n).fill(0))
	let start = 0
	let end = n - 1
	let m = 1
	for (let t = 0; t < Math.floor(n / 2); t++) {
		//上右下左
		for (let i = start; i < end; i++) {
			arr[start][i] = m++
		}
		for (let j = start; j < end; j++) {
			arr[j][end] = m++
		}
		for (let k = end; k > start; k--) {
			arr[end][k] = m++
		}
		for (let l = end; l > start; l--) {
			arr[l][start] = m++
		}
		start++
		end--
	}
	if (n % 2 !== 0) {
		arr[Math.floor(n / 2)][Math.floor(n / 2)] = m
	}
	return arr
}
const arr = generateSpiral(3)
const arr_2 = generateSpiral(4)
console.log(arr, arr_2)
