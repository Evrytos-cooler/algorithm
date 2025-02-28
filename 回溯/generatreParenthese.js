// 给一个n，生成所有的合理的括号组合
// 这是一个有剪枝操作的回溯 对左右括号数做约束。而且必须是'('开始的

const generateParenthese = n => {
	if (n === 0) return ''
	const result = []
	let temp = []
	const traceBack = (left, right) => {
		if (left < right || left > n) return
		if (left === n && right === n) {
			result.push(temp.join(''))
		}
		if (left < n) {
			temp.push('(')
			traceBack(left + 1, right)
			temp.pop()
		}
		if (right < n) {
			temp.push(')')
			traceBack(left, right + 1)
			temp.pop()
		}
	}

	traceBack(0, 0)
	return result
}
console.log(generateParenthese(4))
console.log(generateParentheseV2(4))
