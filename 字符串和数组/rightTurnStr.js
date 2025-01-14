const rightTurnStr = (str, k) => {
	if (!str) return null
	const left = str.slice(0, str.length - k + 1)
	const right = str.slice(str.length - k, str.length)
	const result = [...right, ...left].join('')
	return result
}
const result = rightTurnStr('abcdefg', 2)
