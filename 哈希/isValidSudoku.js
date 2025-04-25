// 用 set 保存遍历结果
// set 中前缀有 x行 y列 z格
const isValidSudoku = board => {
	const set = new Set()
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === '.') continue
			// 计算区块
			let x = Math.floor(j / 3)
			let y = Math.floor(i / 3)

			if (
				set.has(`col-${j}-${board[i][j]}`) ||
				set.has(`row-${i}-${board[i][j]}`) ||
				set.has(`board-${x}-${y}-${board[i][j]}`)
			)
				return false
			else {
				set.add(`col-${j}-${board[i][j]}`)
				set.add(`row-${i}-${board[i][j]}`)
				set.add(`board-${x}-${y}-${board[i][j]}`)
			}
		}
	}
	return true
}

console.log(
	isValidSudoku([
		['.', '.', '.', '.', '5', '.', '.', '1', '.'],
		['.', '4', '.', '3', '.', '.', '.', '.', '.'],
		['.', '.', '.', '.', '.', '3', '.', '.', '1'],
		['8', '.', '.', '.', '.', '.', '.', '2', '.'],
		['.', '.', '2', '.', '7', '.', '.', '.', '.'],
		['.', '1', '5', '.', '.', '.', '.', '.', '.'],
		['.', '.', '.', '.', '.', '2', '.', '.', '.'],
		['.', '2', '.', '9', '.', '.', '.', '.', '.'],
		['.', '.', '4', '.', '.', '.', '.', '.', '.'],
	])
)
