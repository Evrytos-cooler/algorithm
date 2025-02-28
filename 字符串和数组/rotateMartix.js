const rotate = matrix => {
	let start = 0
	let end = matrix.length - 1 // 左闭右开
	while (start < end) {
		const queue = matrix[start].slice(start, end)
		// 右
		for (let i = start; i < end; i++) {
			queue.push(matrix[i][end])
			matrix[i][end] = queue.shift()
		}
		// 下
		for (let i = end; i > start; i--) {
			queue.push(matrix[end][i])
			matrix[end][i] = queue.shift()
		}
		// 左
		for (let i = end; i > start; i--) {
			queue.push(matrix[i][start])
			matrix[i][start] = queue.shift()
		}
		// 上
		for (let i = start; i < end; i++) {
			matrix[start][i] = queue.shift()
		}

		start++
		end--
	}
	return matrix
}
console.log(
	rotate([
		[5, 1, 9, 11],
		[2, 4, 8, 10],
		[13, 3, 6, 7],
		[15, 14, 12, 16],
	])
)
