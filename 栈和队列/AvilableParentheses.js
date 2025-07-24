// 原本不是一个栈，需要先通过入栈构建栈内容，然后在此基础上进行出栈
// 入栈和出栈可能是交叉执行的
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
// console.log(avilableParentheses('()'))
// console.log(avilableParentheses('()[]{]'))
// console.log(avilableParentheses('(){}{[]}'))

const isValid = s => {
	const leftHead = ['(', '[', '{']
	const rightHead = [')', ']', '}']
	const map = new Map()
	for (let i = 0; i < leftHead.length; i++) {
		map.set(leftHead[i], rightHead[i])
	}
	const stack = []
	for (let i = 0; i < s.length; i++) {
		if (leftHead.includes(s[i])) {
			stack.push(s[i])
		} else if (rightHead.includes(s[i])) {
			if (map.get(stack[stack.length - 1]) === s[i]) {
				stack.pop()
			} else return false
		}
	}
	return stack.length === 0
}
console.log(isValid('({}(()[])){}'))
console.log(isValid('({}(()[)){}'))
