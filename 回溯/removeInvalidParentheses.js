// 如何处理多出来的普通字符
// 首先要计算需要删除的括号数量
// 回溯的时候根据当前括号数量获取结果和剪枝
// 根据当前删除的括号数量剪枝
const removeInvalidParentheses = function (s) {
	const result = new Set()
	const arr = s.split('')
	const temp = []
	let leftToRemove = 0
	let rightToRemove = 0
	// 计算需要删除的括号数量
	for (let c of arr) {
		if (c === '(') {
			leftToRemove++
		} else if (c === ')') {
			if (leftToRemove === 0) {
				rightToRemove++
			} else {
				leftToRemove--
			}
		}
	}

	const traceBack = (left, right, leftToRemove, rightToRemove, startIndex) => {
		// 收集结果
		if (
			left === right &&
			s.length === startIndex &&
			leftToRemove === 0 &&
			rightToRemove === 0
		) {
			result.add(temp.join(''))
			return
		}
		// 剪枝
		if (
			startIndex === arr.length ||
			left < right ||
			leftToRemove < 0 ||
			rightToRemove < 0
		) {
			return
		}
		// 单层内容
		const char = arr[startIndex]
		// 保留当前字符
		if (char !== '(' && char !== ')') {
			temp.push(char)
			traceBack(left, right, leftToRemove, rightToRemove, startIndex + 1)
			temp.pop()
			return
		} else if (char === '(') {
			// 保留当前字符
			temp.push(char)
			traceBack(left + 1, right, leftToRemove, rightToRemove, startIndex + 1)
			temp.pop()

			// 删除当前字符
			traceBack(left, right, leftToRemove - 1, rightToRemove, startIndex + 1)
		} else if (char === ')') {
			// 保留当前字符
			temp.push(char)
			traceBack(left, right + 1, leftToRemove, rightToRemove, startIndex + 1)
			temp.pop()

			// 删除当前字符
			traceBack(left, right, leftToRemove, rightToRemove - 1, startIndex + 1)
		}
	}
	traceBack(0, 0, leftToRemove, rightToRemove, 0)
	return new Array(...result)
}
console.log(removeInvalidParentheses(')('))
