// 用一个栈标记组成对的内容，用一个数组标记组成对的位置，最后获取连续1的最长长度
const longestValidParentheses = arr => {
	const stack = []
	const used = new Array(arr.length).fill(0)
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '(') {
			stack.push(i)
		} else {
			if (arr[stack[stack.length - 1]] === '(') {
				used[i] = 1
				used[stack.pop()] = 1
			}
		}
	}

	let max = 0
	let temp = 0
	for (let i = 0; i < arr.length; i++) {
		if (used[i] === 1) temp++
		if (used[i] === 0) temp = 0
		max = Math.max(max, temp)
	}
	return max
}

// 从一个 () 开始向两边拓展，遇到边界相加则合并，继续拓展
const longestValidParenthesesV2 = arr => {
	if (arr.length < 2) return 0
	const expend = (i, j) => {
		while (i > 0 && j < arr.length && arr[i - 1] === '(' && arr[j + 1] === ')') {
			i--
			j++
		}
		return [i, j]
	}

	const findParentheses = startIndex => {
		for (let i = startIndex; i < arr.length - 1; i++) {
			if (arr[i] === '(' && arr[i + 1] === ')') {
				return [i, i + 1]
			}
		}
		return [-1, -1]
	}

	let i = 0,
		j = 0
	let map = new Map()
	// 右边界做key，左边界做value
	let max = 0
	while (true) {
		const [_i, _j] = findParentheses(j)
		if (_i === -1) break
		;[i, j] = [_i, _j]
		;[i, j] = expend(i, j)
		while (map.has(i - 1)) {
			;[i, j] = expend(map.get(i - 1), j)
		}
		map.set(j, i)
		max = Math.max(max, j - i + 1)
	}
	return max
}

console.log(longestValidParenthesesV2(')(())(()()))('))
