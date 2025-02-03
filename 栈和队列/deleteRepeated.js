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
