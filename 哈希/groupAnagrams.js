// 关键思想在于将字符串排序后的结果作为hash key，所有单词异位词排序后都得到同一个结果，就能够同意处理了
const groupAnagrams = strs => {
	const map = new Map()
	for (let word of strs) {
		const key = word.split('').sort().join('')
		if (map.has(key)) {
			map.get(key).push(word)
		} else {
			map.set(key, [word])
		}
	}

	const result = Array.from(map).map(i => i[1])
	return result
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
