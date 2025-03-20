// 经典递归DFS
const numIslands = function (grid) {
	let count = 0
	const DFS = (grid, i, j) => {
		if (
			i >= 0 &&
			j >= 0 &&
			i < grid.length &&
			j < grid[0].length &&
			grid[i][j] === '1'
		) {
			grid[i][j] = '0'
			DFS(grid, i + 1, j)
			DFS(grid, i - 1, j)
			DFS(grid, i, j + 1)
			DFS(grid, i, j - 1)
		}
	}
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] == 1) {
				DFS(grid, i, j)
				count++
			}
		}
	}

	return count
}
console.log(
	numIslands([
		['1', '0', '1', '1', '1'],
		['1', '0', '1', '0', '1'],
		['1', '1', '1', '0', '1'],
	])
)

// dfs 的做法是： 遍历每一个节点，然后尽量的去拓展陆地
// bfs 的做法是： 遍历每一个节点，遇到陆地的时候执行拓展操作：
// 将周围的（不可能是新岛屿）的节点标记访问，一圈一圈的展开 , 通过一个队列，维护需要继续执行 BFS 的节点

const numsIslandV2 = function (grid) {
	if (!grid.length) return 0
	let count = 0
	let used = new Array(grid.length)
		.fill()
		.map(() => new Array(grid[0].length).fill(false))
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (!used[i][j] && grid[i][j] === '1') {
				// 遇到没有被访问过的岛屿
				count++
				BFS(i, j)
			}
		}
	}

	function BFS(a, b) {
		const stack = [[a, b]]
		used[a][b] = true
		while (stack.length) {
			const [x, y] = stack.pop()
			if (x > 0 && grid[x - 1][y] === '1' && !used[x - 1][y]) {
				used[x - 1][y] = true
				stack.push([x - 1, y])
			}
			if (x < grid.length - 1 && grid[x + 1][y] === '1' && !used[x + 1][y]) {
				used[x + 1][y] = true
				stack.push([x + 1, y])
			}
			if (y > 0 && grid[x][y - 1] === '1' && !used[x][y - 1]) {
				used[x][y - 1] = true
				stack.push([x, y - 1])
			}
			if (y < grid[0].length - 1 && grid[x][y + 1] === '1' && !used[x][y + 1]) {
				used[x][y + 1] = true
				stack.push([x, y + 1])
			}
		}
	}

	return count
}

console.log(
	numsIslandV2([
		['1', '1', '0', '0', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '1', '0', '0'],
		['0', '0', '0', '1', '1'],
	])
)
