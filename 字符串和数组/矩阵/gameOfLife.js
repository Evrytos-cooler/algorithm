// 周围八个位置活细胞 < 2 活细胞死
// 周围八个位置活细胞 === 2 不变
// 周围八个位置活细胞 === 3 死细胞活
// 周围八个位置活细胞 > 3 活细胞死
// 所有的变化同时发生，不能先改变某个细胞然后因此判断其他细胞
// 直观做法，遍历 matrix，然后记录更改的操作 0-1 / 1-0
const gameOfLife = function (board) {
	if (board.length === 0 || board[0].length === 0) return
	const change = { '01': [], 10: [] }
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			let count = collectChange(i, j)
			if ((count < 2 || count > 3) && board[i][j] === 1) {
				change['10'].push([i, j])
			} else if (count === 3 && board[i][j] === 0) {
				change['01'].push([i, j])
			}
		}
	}

	for (let [x, y] of change['01']) {
		board[x][y] = 1
	}
	for (let [x, y] of change['10']) {
		board[x][y] = 0
	}
	return board

	function collectChange(i, j) {
		let source = [
			[-1, -1],
			[-1, 0],
			[-1, 1],
			[0, -1],
			[0, 1],
			[1, -1],
			[1, 0],
			[1, 1],
		]
		const target = []
		source.forEach(([dx, dy]) => {
			let x = dx + i
			let y = dy + j
			if (0 <= x && x < board.length && 0 <= y && y < board[0].length) {
				target.push([x, y])
			}
		})

		let count = 0
		target.forEach(([x, y]) => {
			if (board[x][y] === 1) count++
		})
		return count
	}
}
gameOfLife([
	[0, 1, 0],
	[0, 0, 1],
	[1, 1, 1],
	[0, 0, 0],
])

// 上面的办法空间复杂度不是 1 最坏情况可能接近 O(mn) （ 所有都要修改，保存到 change 中 ）
// 让每一个位置保存更多的信息，2 表示 01（原本是 1，要变成 0），3 表示 10
const gameOfLifeV2 = board => {
	if (board.length === 0 || board[0].length === 0) return
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			let count = collectChange(i, j)
			if ((count < 2 || count > 3) && board[i][j] === 1) {
				board[i][j] = 3
			} else if (count === 3 && board[i][j] === 0) {
				board[i][j] = 2
			}
		}
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === 2) board[i][j] = 1
			if (board[i][j] === 3) board[i][j] = 0
		}
	}

	return board

	function collectChange(i, j) {
		let source = [
			[-1, -1],
			[-1, 0],
			[-1, 1],
			[0, -1],
			[0, 1],
			[1, -1],
			[1, 0],
			[1, 1],
		]
		const target = []
		source.forEach(([dx, dy]) => {
			let x = dx + i
			let y = dy + j
			if (0 <= x && x < board.length && 0 <= y && y < board[0].length) {
				target.push([x, y])
			}
		})

		let count = 0
		target.forEach(([x, y]) => {
			if (board[x][y] === 1 || board[x][y] === 3) count++
		})
		return count
	}
}
gameOfLifeV2([
	[0, 1, 0],
	[0, 0, 1],
	[1, 1, 1],
	[0, 0, 0],
])
