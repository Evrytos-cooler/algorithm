// 考虑用回溯，用一个used保存是否被用过
const exist = function (board, word) {
	word = word.split('')
	const wordLength = word.length
	const entry = []
	let count = 0
	const used = new Array(board.length)
		.fill()
		.map(() => new Array(board[0].length).fill(false))
	// 找到入口
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === word[0]) {
				entry.push([i, j])
			}
		}
	}
	if (entry.length === 0) return false

	// 回溯
	const backTrace = (i, j) => {
		// 如果没有指定的字符(超出范围)则结束
		if (count === wordLength) return true
		if (
			i < 0 ||
			j < 0 ||
			i > board.length - 1 ||
			j > board[0].length - 1 ||
			used[i][j]
		)
			return false

		const key = word.shift()
		if (board[i][j] === key) {
			used[i][j] = true
			count++
			let a = backTrace(i + 1, j)
			let b = backTrace(i - 1, j)
			let c = backTrace(i, j + 1)
			let d = backTrace(i, j - 1)
			if (a || b || c || d) return true
			used[i][j] = false
			count--
		}
		word.unshift(key)
	}

	// 各个入口开始执行回溯
	for (let [i, j] of entry) {
		if (backTrace(i, j)) return true
	}
	// 如果指定的字符数量到了则返回true
	return false
}
console.log(exist([['A']], 'A'))
