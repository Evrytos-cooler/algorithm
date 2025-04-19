const isPalindrome = s => {
	const arr = s
		.toLowerCase()
		.split('')
		.filter(
			i =>
				(i.toLowerCase().charCodeAt(0) >= 'a'.charCodeAt(0) &&
					i.toLowerCase().charCodeAt(0) <= 'z'.charCodeAt(0)) ||
				Number.isFinite(parseInt(i))
		)
	let i = 0,
		j = arr.length - 1
	while (i <= j) {
		if (arr[i] !== arr[j]) return false
		i++
		j--
	}
	return true
}
console.log(isPalindrome('A man, a plan, a canal: Panama'))
