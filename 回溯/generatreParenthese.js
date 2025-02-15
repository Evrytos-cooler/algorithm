// 给一个n，生成所有的合理的括号组合
// 这是一个有剪枝操作的回溯 对左右括号数做约束。而且必须是'('开始的

const generateParenthese = n => {
	let result = []
	let temp = []
	const backTrace = (left, right) => {
		// 剪枝
		if (left < right || left > n) return
		//结束条件
		if (left === n && right === n) {
			result.push(temp.join('').slice())
			return
		}
		if (left < n) {
			temp.push('(')
			backTrace(left + 1, right) //传参这里其实已经包含了回溯
			temp.pop()
		}
		if (right < n) {
			temp.push(')')
			backTrace(left, right + 1)
			temp.pop()
		}
	}
	backTrace(0, 0)
	return result
}

console.log(generateParenthese(4))
