const transfer = string => {
	let sum = 0
	for (let i = 0; i < string.length; i++) {
		//当前位置的数值
		const num = string[i].charCodeAt() - 'a'.charCodeAt()
		//当前位置
		const position = string.length - 1 - i
		sum += 26 ** position * num
	}
	return sum
}
console.log(transfer('bz')) // 26 + 25 = 51
