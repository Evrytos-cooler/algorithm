// 入参不是一个栈，需要我们在构建栈的过程中逐步处理得出结果
// 递归处理，如果里面的内容含有[]则继续递归，否则返回原字符串
// 对于人脑来说，先计算里面再计算外面是很自然的，对于计算机来说，可以使用栈实现
// 1. 通过标记范围开始和结束的标志（这里是[])，能够通过栈将内容分为多个部分处理
// 2. 每次进入一个区域（遇到[),需要保存当前的上下文，并初始化变量 num 和 str
// 3. 每次离开一个区域 (遇到]),则需要计算当前区域的结果，将当前结果与上一个上下文的内容拼接，这是上一个区域的计算过程
// 4. 然后再次遇到 ] ,则再次计算结果，获取上下文
const decodeString = function (s) {
	//保存参数
	let numberStack = []
	// 保存需要计算的字符串 一一对应
	let strStack = []
	let number = ''
	let str = ''
	for (let c of s) {
		if (Number.isFinite(Number(c))) {
			number += c
		} else if (c === '[') {
			// 保存变量
			numberStack.push(Number(number))
			strStack.push(str)
			number = ''
			str = ''
		} else if (c === ']') {
			// 遍历完了一个代码块，拿数据出来计算, 并放入完成的stack中
			const decode = str.repeat(numberStack.pop(0))
			str = strStack.pop() + decode
		} else {
			str += c
		}
	}
	return str
}

console.log(decodeString('3[ab2[xx]c]'))
