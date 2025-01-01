//回文分割字符串
var partition = function (s) {
	const result = []
	const temp = []
	const traceBack = startIndex => {
		//保存结果
		if (startIndex >= s.length) {
			result.push(temp.slice())
			return
		}
		//循环
		for (let i = startIndex; i < s.length; i++) {
			if (!isPalindrome(s.slice(startIndex, i + 1))) continue
			temp.push(s.slice(startIndex, i + 1))
			traceBack(i + 1)
			temp.pop()
		}
	}
	const isPalindrome = s => {
		for (let i = 0, j = s.length - 1; i < j; i++, j--) {
			if (s[i] !== s[j]) return false
		}
		return true
	}
	traceBack(0)
	return result
}
partition('aab')
