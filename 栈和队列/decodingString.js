// 递归处理，如果里面的内容含有[]则继续递归，否则返回原字符串
// 对于人脑来说，先计算里面再计算外面是很自然的，对于计算机来说，可以使用栈实现
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
