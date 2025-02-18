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
