/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
	const result = []
	const temp = []
	const traceBack = (arr, startIndex) => {
		// 保存结果
		if (temp.length > 4) return
		if (temp.length === 4 && startIndex === arr.length) {
			result.push(temp.join('.'))
			return
		}
		// 循环，只需要3次改变temp 因为ip是三位数的
		for (let i = startIndex; i < startIndex + 3; i++) {
			const str = arr.slice(startIndex, i + 1)
			if (Number(str) > 255 || (str[0] == '0' && str.length > 1)) return
			temp.push(str)
			traceBack(arr, i + 1)
			// 回退
			temp.pop()
		}
	}
	traceBack(s, 0)
	return result
}
restoreIpAddresses('25525511135')
