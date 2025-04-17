// 原本就是一个栈，我们只需要不断的出栈即可
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	let stack = []
	for (let key of tokens) {
		if (key === '+') {
			let a = Number(stack.pop())
			let b = Number(stack.pop())
			stack.push(a + b)
		} else if (key === '-') {
			let a = Number(stack.pop())
			let b = Number(stack.pop())
			stack.push(b - a)
		} else if (key === '*') {
			let a = Number(stack.pop())
			let b = Number(stack.pop())
			stack.push(a * b)
		} else if (key === '/') {
			let a = Number(stack.pop())
			let b = Number(stack.pop())
			stack.push(parseInt(b / a))
		} else {
			stack.push(key)
		}
	}
	return stack[0]
}
evalRPN(['2', '1', '+', '3', '*'])
