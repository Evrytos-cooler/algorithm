/**
 * @param {string} s
 * @return {number}
 */
// 以括号为栈开始和结束的标记，每次括号闭合/长度结束就执行依次计算
// 需要处理多个数字连在一起的情况
const calculate = function (s) {
	if (s.length <= 0) return 0

	const flagStack = [] //暂存栈
	const numStack = []
	const resultTempStack = []
	let result = 0
	let flag = 1 // 默认是正号
	let num = ''
	for (let c of s) {
		if (c === ' ') {
			continue
		} else if (c === '(') {
			// 保存前面的遍历内容，进入下一个计算周期
			flagStack.push(flag)
			numStack.push(num)
			resultTempStack.push(result)
			result = 0
			flag = 1
			num = ''
		} else if (c === ')') {
			// 计算出当前 （） 中的内容在数字处就做了处理了
			// 恢复上一个计算周期
			result += flag * Number(num)
			num = numStack.pop()
			flag = flagStack.pop()
			result = flag * result + resultTempStack.pop()
		} else if (c === '+') {
			result += flag * Number(num)
			num = ''
			flag = 1
		} else if (c === '-') {
			result += flag * Number(num)
			num = ''
			flag = -1
		} else {
			// 这里就是数字
			num += c
		}
	}
	result += flag * Number(num)
	return result
}

// 测试函数
function testCalculate() {
	// 测试用例数组
	const testCases = [
		{ input: '1 + 1', expected: 2, description: '基本加法' },
		{ input: '2-1 + 2', expected: 3, description: '混合运算' },
		{ input: '(1+(4+5+2)-3)+(6+8)', expected: 23, description: '复杂括号嵌套' },
		{ input: '', expected: 0, description: '空字符串' },
		{ input: '   ', expected: 0, description: '空格字符串' },
		{ input: '(1)', expected: 1, description: '单个括号' },
		{ input: '(1+(2+3))', expected: 6, description: '括号嵌套' },
		{ input: '1-(2-(3-4))', expected: -2, description: '多重括号' },
		{ input: '1 + (2 - 3) + 4', expected: 4, description: '混合括号' },
	]

	// 运行测试
	console.log('开始测试计算器函数...\n')

	testCases.forEach((testCase, index) => {
		const result = calculate(testCase.input)
		const passed = result === testCase.expected

		console.log(`测试用例 ${index + 1}: ${testCase.description}`)
		console.log(`输入: "${testCase.input}"`)
		console.log(`期望结果: ${testCase.expected}`)
		console.log(`实际结果: ${result}`)
		console.log(`测试${passed ? '通过' : '失败'}`)
		console.log('------------------------')
	})
}

// 运行测试
testCalculate()
