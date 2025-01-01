const bigNumberMultipart = (_num1, _num2) => {
	const num1 = _num1.split('').reverse()
	const num2 = _num2.split('').reverse()
	//保证num1是最长的
	if (num1.length < num2.length) {
		;[num1, num2] = [num2, num1]
	}
	const tempResult = [] //二维数组保存中间结果 Number[]
	//外层遍历短数组，内层遍历长数组
	for (let n = 0; n < num2.length; n++) {
		let temp = []
		//保存前驱0
		for (let i = 0; i < n; i++) {
			temp.push(0)
		}
		for (let m = 0; m < num1.length; m++) {
			const a = Number(num2[n]) || 0
			const b = Number(num1[m]) || 0
			temp.push(a * b)
		}
		tempResult.push(temp)
	}
	//做累加
	const result = []
	let flag = 0
	for (let i = 0; i < num1.length + num2.length - 1; i++) {
		let temp = 0
		//相加
		tempResult.forEach(arr => {
			temp += arr[i] || 0
		})
		temp += flag
		//维护result和flag
		result.push(temp % 10)
		flag = Math.floor(temp / 10)
	}
	result.push(flag)

	//处理全部是0 的情况(删除尾部多余的0)
	while (result[result.length - 1] === 0) {
		result.pop()
	}
	return result.reverse().join('') || '0'
}

console.log(bigNumberMultipart('123', '321'))
