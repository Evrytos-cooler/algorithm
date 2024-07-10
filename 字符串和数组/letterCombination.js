/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	const digitsMap = [, , 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
	const path = []
	const result = []
	if (digits.length === 0) return result
	//index表示树的深度
	const traceBack = index => {
		if (path.length === digits.length) {
			result.push(path.join(''))
			return
		}
		for (let i of digitsMap[Number(digits.split('')[index])].split('')) {
			path.push(i)
			traceBack(index + 1)
			path.pop(i)
		}
	}
	traceBack(0)
	return result
}

console.log(letterCombinations('23'))
