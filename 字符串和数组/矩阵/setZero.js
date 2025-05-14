const setZeroes = function (matrix) {
	if (matrix.length === 0 || matrix[0].length === 0) return
	const target = []
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				target.push([i, j])
			}
		}
	}

	target.forEach(([x, y]) => {
		for (let i = 0; i < matrix.length; i++) {
			matrix[i][y] = 0
		}
		for (let j = 0; j < matrix[0].length; j++) {
			matrix[x][j] = 0
		}
	})
	return matrix
}
setZeroes([
	[0, 1, 2, 0],
	[3, 4, 5, 2],
	[1, 3, 1, 5],
])
