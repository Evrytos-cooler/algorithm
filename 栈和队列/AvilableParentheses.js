const avilableParentheses = arr => {
	const stack = []
	for (let key of arr) {
		if (['(', '[', '{'].includes(key)) {
			stack.push(key)
		} else if ([')', ']', '}'].includes(key)) {
			switch (key) {
				case ')':
					if (stack.pop() !== '(') return false
					break
				case ']':
					if (stack.pop() !== '[') return false
					break
				case '}':
					if (stack.pop() !== '{') return false
					break
				default:
					break
			}
		} else {
			continue
		}
	}
	return true
}
console.log(avilableParentheses('()'))
console.log(avilableParentheses('()[]{]'))
console.log(avilableParentheses('(){}{[]}'))
