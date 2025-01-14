const replaceNum = str => {
	const target = str.split('')
	const result = new Array()
	for (let i = target.length - 1; i >= 0; i--) {
		if ('0123456789'.includes(target[i])) {
			target.pop()
			result.unshift('n', 'u', 'm', 'b', 'e', 'r')
		} else {
			result.unshift(target.pop())
		}
	}
	return result
}
const result = replaceNum('a1b2c3')
