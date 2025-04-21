// 回溯问题，每次添加一个王后，要检查是不是ok，不ok就换下一个
const solveNQueens = n => {
	const chessBox = new Array(n).fill().map(() => new Array(n).fill('.'))
	let result = 0
	const usedCol = new Array(n).fill(false)
	const traceBack = (index, count) => {
		// 收集结果
		if (index === n && count === n) {
			result++
			return
		}
		for (let i = 0; i < n; i++) {
			// 被占用了
			if (usedCol[i] || ocuppied(index, i)) continue
			usedCol[i] = true
			chessBox[index][i] = 'Q'
			traceBack(index + 1, count + 1)
			chessBox[index][i] = '.'
			usedCol[i] = false
		}
	}

	// 对角线判断
	function ocuppied(i, j) {
		let col = i,
			row = j
		while (col < n - 1 && row < n - 1) {
			col++
			row++
			if (chessBox[col][row] === 'Q') return true
		}
		col = i
		row = j
		while (col > 0 && row < n - 1) {
			col--
			row++
			if (chessBox[col][row] === 'Q') return true
		}
		col = i
		row = j
		while (col < n - 1 && row > 0) {
			col++
			row--
			if (chessBox[col][row] === 'Q') return true
		}
		col = i
		row = j
		while (col > 0 && row > 0) {
			col--
			row--
			if (chessBox[col][row] === 'Q') return true
		}
		return false
	}
	traceBack(0, 0)
	return count
}

console.log(solveNQueens(4))
