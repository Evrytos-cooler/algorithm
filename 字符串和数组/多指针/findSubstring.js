// 串联所有单词的子串
// words 中组合顺序随机，words 中的每一个串的长度相同
const findSubstring = function (s, words) {
	const result = []
	const targetMap = new Map()
	for (let word of words) {
		targetMap.set(word, targetMap.get(word) + 1 || 1)
	}

	const findWordsList = (s, prefix) => {
		const wordList = []
		const map = new Map()
		const wordLength = words[0].length

		for (let i = 0; i < words.length; i++) {
			wordList[i] = s.slice(i * wordLength, (i + 1) * wordLength)
		}

		for (let word of wordList) {
			map.set(word, map.get(word) + 1 || 1)
		}

		for (const [key, value] of targetMap) {
			if ((map.get(key) || 0) !== value) return false
		}

		result.push(prefix)
	}

	let head = 0
	let tail = words.length * words[0].length
	while (tail <= s.length) {
		findWordsList(s.slice(head, tail), head)
		tail++
		head++
	}
	return result
}
console.log(findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']))
