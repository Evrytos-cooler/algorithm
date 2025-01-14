const happyNumber = target => {
	let string = String(target)
	const map = new Map() //保存出现过的数字

	while (!map.has(string)) {
		map.set(string, 1)
		let sum = 0
		for (let i of string) {
			i = Number(i)
			sum += i * i
		}
		if (sum === 1) {
			return true
		}
		string = String(sum)
	}
	return false
}

const result = happyNumber(19)
