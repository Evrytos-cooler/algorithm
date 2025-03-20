// 表达式是自然语言顺序的
// 看起来就很复杂的题目，考虑能否找到子问题，如果有子问题，看子问题和序列有无关联
// 如果有关联的可以尝试DP，如果没有关联的可以考虑递归。DP 可以认为是 递归优化出来的。
// 比如 2 * 9 + 1  可以通过符号拆分为多个子问题
const diffWaysToCompute = expression => {
	const traceBack = e => {
		// 递归结束条件，就是当前是纯数字，纯数字的长度也不一定是1
		const temp = []
		let count = 0 // 统计标点个数，没有就是纯数字
		// 通过符号分割
		for (let i = 0; i < e.length; i++) {
			if (isOperation(e[i])) {
				count++
				const left = traceBack(e.slice(0, i))
				const right = traceBack(e.slice(i + 1))
				for (let k = 0; k < left.length; k++) {
					for (let j = 0; j < right.length; j++) {
						temp.push(calc(left[k], e[i], right[j]))
					}
				}
			}
		}
		if (count === 0) return [Number(e)]
		return temp
	}

	function isOperation(c) {
		return c === '+' || c === '-' || c === '*' || c === '/'
	}
	function calc(a, o, b) {
		a = Number(a)
		b = Number(b)
		switch (o) {
			case '+':
				return a + b
			case '-':
				return a - b
			case '*':
				return a * b
			case '/':
				return a / b
			default:
				return
		}
	}

	const result = traceBack(expression)
	return result
}

console.log(diffWaysToCompute('11'))
