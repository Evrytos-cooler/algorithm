const hammingDistance = function (x, y) {
	let s = String(x ^ y)
	let count = 0
	while (s) {
		count += s & 1
		s >>= 1
	}
	return count
}

console.log(hammingDistance(3, 1))
