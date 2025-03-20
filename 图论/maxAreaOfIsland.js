var maxAreaOfIsland = function (grid) {
	let max = 0
	const DFS = (grid, i, j) => {
		if (
			i >= 0 &&
			j >= 0 &&
			i < grid.length &&
			j < grid[0].length &&
			grid[i][j] === 1
		) {
			grid[i][j] = 0
			let a = DFS(grid, i + 1, j)
			let b = DFS(grid, i, j + 1)
			let c = DFS(grid, i, j - 1)
			let d = DFS(grid, i - 1, j)
			return a + b + c + d + 1
		}
		return 0
	}
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 1) {
				const area = DFS(grid, i, j)
				max = Math.max(max, area)
			}
		}
	}

	return max
}
console.log(
	maxAreaOfIsland([
		[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
		[0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
	])
)
