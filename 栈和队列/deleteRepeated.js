// 需要先入栈构建一个栈，在入栈过程中执行操作。然后在栈中执行出栈操作
const deleteRepeat = arr => {
	const stack = []
	for (let key of arr) {
		if (key === stack[stack.length - 1]) stack.pop()
		else {
			stack.push(key)
		}
	}
	return stack.join('')
}
console.log(deleteRepeat('baabcads'))
