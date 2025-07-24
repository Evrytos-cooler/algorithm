var bigNumberMultipart = (_num1, _num2) => {
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

// 从竖式计算找思路
// 1. num1 长于 num2
// 2. num2 拆分为一个一个数
// 3. 单数相乘用 simpleMultipart 计算
// 4. 结果乘以权重相加
var bigNumberMultipart = (_num1, _num2) => {
	const tempResult = []
	const [num1, num2] = _num1.length >= _num2.length ? [_num1, _num2] : [_num2, _num1]
	for (let i = num2.length - 1; i >= 0; i--) {
		tempResult.push(simpleMultipart(num1, num2[i]))
	}
	const res = tempResult.reduce((prev, cur, curIndex) => {
		// 不能直接用加法，数字够大就会爆，所以要用上字符串加法
		return simpleSum(prev, cur + '0'.repeat(curIndex))
	}, '0')
	return res
}

const simpleMultipart = (num, char) => {
	let resList = []
	for (let i = num.length - 1; i >= 0; i--) {
		resList.push(Number(num[i]) * Number(char))
	}
	const res = resList.reduce((prev, cur, curIndex) => {
		return simpleSum(prev, cur + '0'.repeat(curIndex))
	}, '0')
	return res
}

const simpleSum = (_num1, _num2) => {
	const num1 = _num1.split('').reverse()
	const num2 = _num2.split('').reverse()
	let flag = 0
	let res = []
	for (let i = 0; i < Math.max(num1.length, num2.length); i++) {
		const n1 = Number(num1[i]) || 0
		const n2 = Number(num2[i]) || 0
		const temp = n1 + n2 + flag
		res.unshift(temp % 10)
		flag = Math.floor(temp / 10)
	}
	flag !== 0 && res.unshift(flag)
	return res.join('')
}

console.log(bigNumberMultipart('123456789', '987654321'))
