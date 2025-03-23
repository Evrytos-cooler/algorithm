// KMP 算法，前缀数组 next
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (haystack.length < needle.length || haystack.length === 0) return -1
	if (needle.length === 0) return 0

	const getNext = needle => {
		let next = Array(needle.length).fill(0)
		let p1 = 0
		next[0] = p1
		for (let p2 = 1; p2 < needle.length; p2++) {
			while (p1 > 0 && needle[p1] !== needle[p2]) {
				//利用next回退，可以利用上一次的计算结果，而不用重复计算
				p1 = next[p1 - 1]
			}
			if (needle[p1] === needle[p2]) {
				p1++
				next[p2] = p1
			}
		}
		return next
	}
	let next = getNext(needle)

	//查找
	let p1 = (p2 = 0)
	while (p2 < needle.length) {
		if (p2 === 0) {
			while (haystack[p1] && needle[p2] !== haystack[p1]) {
				p1++
			}
			if (haystack[p1] !== needle[p2]) return -1
		}
		if (haystack[p1] === needle[p2]) {
			p1++
			p2++
		} else {
			p2 = next[p2 - 1]
		}
	}
	console.log(p1 - p2)
	return p2 - p1
}
strStr('aabaaabaaac', 'aabaaac')
