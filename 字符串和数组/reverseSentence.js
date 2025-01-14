const reverseSentence = str => {
	const _words = str.split(' ')
	const words = _words.filter(word => word !== '')
	let i = 0
	let j = words.length - 1
	while (i < j) {
		const temp = words[i]
		words[i] = words[j]
		words[j] = temp
		i++
		j--
	}
	const result = words.join(' ')
	return result
}
const result = reverseSentence('  the sky  is blue  ')
