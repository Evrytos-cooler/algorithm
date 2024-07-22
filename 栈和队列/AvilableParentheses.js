const avilableParentheses = string => {
	const list = Array.from(string)
	const stack = []
	while (list.length) {
		const char = list.shift()
		switch (char) {
			case '(':
				stack.push(')')
				break
			case '{':
				stack.push('}')
				break
			case '[':
				stack.push(']')
				break
			case ')': {
				const target = stack.pop()
				if (target === char) continue
				else {
					return false
				}
				break
			}
			case '}': {
				const target = stack.pop()
				if (target === char) continue
				else {
					return false
				}
			}
			case ']': {
				const target = stack.pop()
				if (target === char) continue
				else {
					return false
				}
			}
		}
	}
	if (stack.length) return false
	return true
}

console.log(avilableParentheses('()'))
console.log(avilableParentheses('()[]{]'))
console.log(avilableParentheses('(){}{[]}'))
