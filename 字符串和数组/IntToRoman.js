/**
 * @param {number} num
 * @return {string}
 */
// 只到千分位
// 1. 判断位数，获取需要的字母
// 2. 判断数字，更新字符串
var intToRoman = function (num) {
	let numCopy = num
	let result = ''
	let map = new Map()
	map.set(100, ['M', 'D', 'C'])
	map.set(10, ['C', 'L', 'X'])
	map.set(1, ['X', 'V', 'I'])

	// 千位
	while (numCopy >= 1000) {
		result += 'M'
		numCopy -= 1000
	}

	// 百位
	while (numCopy >= 100) {
		const data = map.get(100)
		if (String(numCopy)[0] === '4') {
			result += data[2] + data[1]
			numCopy -= 400
		} else if (String(numCopy)[0] === '9') {
			result += data[2] + data[0]
			numCopy -= 900
		} else if (numCopy >= 500) {
			result += data[1]
			numCopy -= 500
		} else if (numCopy >= 100) {
			result += data[2]
			numCopy -= 100
		}
	}

	// 十位
	while (numCopy >= 10) {
		const data = map.get(10)
		if (String(numCopy)[0] === '4') {
			result += data[2] + data[1]
			numCopy -= 40
		} else if (String(numCopy)[0] === '9') {
			result += data[2] + data[0]
			numCopy -= 90
		} else if (numCopy >= 50) {
			result += data[1]
			numCopy -= 50
		} else if (numCopy >= 10) {
			result += data[2]
			numCopy -= 10
		}
	}

	// 个位
	while (numCopy > 0) {
		const data = map.get(1)
		if (String(numCopy)[0] === '4') {
			result += data[2] + data[1]
			numCopy -= 4
		} else if (String(numCopy)[0] === '9') {
			result += data[2] + data[0]
			numCopy -= 9
		} else if (numCopy >= 5) {
			result += data[1]
			numCopy -= 5
		} else if (numCopy >= 1) {
			result += data[2]
			numCopy -= 1
		}
	}
	return result
}

// 测试用例
console.log('基本数字转换测试：')
console.log('1 ->', intToRoman(1))  // I
console.log('5 ->', intToRoman(5))  // V
console.log('10 ->', intToRoman(10))  // X
console.log('50 ->', intToRoman(50))  // L
console.log('100 ->', intToRoman(100))  // C
console.log('500 ->', intToRoman(500))  // D
console.log('1000 ->', intToRoman(1000))  // M

console.log('\n特殊数字转换测试：')
console.log('4 ->', intToRoman(4))  // IV
console.log('9 ->', intToRoman(9))  // IX
console.log('40 ->', intToRoman(40))  // XL
console.log('90 ->', intToRoman(90))  // XC
console.log('400 ->', intToRoman(400))  // CD
console.log('900 ->', intToRoman(900))  // CM

console.log('\n复杂数字转换测试：')
console.log('58 ->', intToRoman(58))  // LVIII
console.log('1994 ->', intToRoman(1994))  // MCMXCIV
console.log('3999 ->', intToRoman(3999))  // MMMCMXCIX

console.log('\n边界情况测试：')
console.log('0 ->', intToRoman(0))  // ''
console.log('3999 ->', intToRoman(3999))  // MMMCMXCIX
