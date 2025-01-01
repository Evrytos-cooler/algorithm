//大数相加
//接收的是String
const bigNumberSum = (_num1, _num2) => {
	const result = []
	let flag = 0
	//转换为数组并反向
	const num1 = _num1.split('').reverse()
	const num2 = _num2.split('').reverse()
	//自后向前相加， 取当前位置并取进位 flag
	for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
		const item1 = Number(num1[i]) || 0
		const item2 = Number(num2[i]) || 0
		const temp = item1 + item2 + flag

		result.push(temp % 10)
		if (temp >= 10) {
			flag = 1
		} else flag = 0
	}
	//处理最后一位的进位
	if (flag === 1) {
		result.push(1)
	}
	//返回反向并转换为string
	return result.reverse().join('').toString() || 0
}

console.log(
	bigNumberSum(
		'111111111111111111111111111111111',
		'11111111111111111111111111111111111111111111111111111111'
	)
)
