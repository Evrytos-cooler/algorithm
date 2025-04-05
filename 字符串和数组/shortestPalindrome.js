// 直观的暴力解法
const shortestPalindrome = str => {
	if (str.split('').reverse().join('') === str) return str
	str = str.split('')
	const r_str = str.slice().reverse()
	let temp = []

	for (let i = 0; i < str.length; i++) {
		temp.push(r_str.shift())
		const target = temp.concat(str)
		if (target.join('') === target.slice().reverse().join(''))
			return temp.concat(str).join('')
	}
	return ''
}
console.log(shortestPalindrome('aacecaaa'))

// 通过指针来优化暴力解法
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindromeV2 = function (s) {
	// 通过找出原本的子串中最长的回文串，剩余的后缀（reverse）放到头部
	const reverse_s = s.split('').reverse().join('')
	for (let i = s.length; i >= 0; i--) {
		const sub = s.slice(0, i)
		// 注意slice是左闭右开的
		const reverse_sub = reverse_s.slice(s.length - i)
		if (sub === reverse_sub) {
			// 这里就是已经找到了最长的回文前缀（0,i）
			return reverse_s.slice(0, s.length - i) + s
		}
	}
}
