// https://leetcode.cn/problems/delete-characters-to-make-fancy-string/?envType=daily-question&envId=2025-07-21
var makeFancyString = function (s) {
	if (s.length < 3) return s
	let result = ''
	let p1 = 0
	let p2 = 1
	let p3 = 2
	if (s[p1] === s[p2] && s[p2] === s[p3]) {
		result += s.slice(0, 2)
	} else {
		result = s.slice(0, 3)
	}
	p1++
	p2++
	p3++

	while (p3 < s.length) {
		if (s[p1] === s[p2] && s[p2] === s[p3]) {
			p1++
			p2++
			p3++
		} else {
			result += s[p3]
			p1++
			p2++
			p3++
		}
	}
	return result
}

console.log(makeFancyString('aab'))
var makeFancyString = function (s) {
	if (s.length < 3) return s
	let j = 0
	let result = [s[0]]
	for (let i = 1; i < s.length; i++) {
		if (!(result[j]?.[0] === s[i])) j++
		if ((result[j] || '').length < 2) result[j] = (result[j] || '') + s[i]
	}

	const res = result.join('')
	return res
}

console.log(makeFancyString('leeetcode'))
