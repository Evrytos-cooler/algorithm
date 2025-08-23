const simpleRearrange = arr => {
	const mySort = (a, b) => {
		const number1 = String(a) + String(b)
		const number2 = String(b) + String(a)
		if (number1 > number2) return -1
		else return 1
	}
	return arr.sort(mySort).join('')
}

// 用了比较复杂的写法，类似于版本号比较
const rearrange = arr => {
	const mySort = (a, b) => {
		let A = String(a)
		let B = String(b)
		for (let i = 0; i < Math.max(A.length, B.length); i++) {
			// 用是否越界判断，避免NaN处理
			let num1 = i < A.length ? Number(A[i]) : null
			let num2 = i < B.length ? Number(B[i]) : null

			if (num1 !== null && num2 !== null) {
				if (num1 > num2) {
					return -1
				} else if (num1 < num2) {
					return 1 // 修复：num1小时返回1，让b排在前面
				} else {
					continue // 相等则继续比较
				}
			} else {
				// 处理长度不同的情况
				if (num1 === null) {
					// A较短，比较B的当前位与前一位
					return num2 < Number(B[i - 1]) ? -1 : 1
				} else {
					// B较短，比较A的当前位与前一位
					return num1 < Number(A[i - 1]) ? 1 : -1
				}
			}
		}
		return 0
	}

	const result = arr.sort(mySort).join('')
	// 处理全0情况
	return result[0] === '0' ? '0' : result
}

console.log(rearrange([3, 30, 34, 5, 9])) // 输出 "9534330"
console.log(rearrange([10, 2])) // 输出 "210"
console.log(rearrange([1, 10, 100])) // 输出 "110100"
console.log(rearrange([0, 0, 0])) // 输出 "0"

const rearrangeV2 = arr => {
	if (arr.every(i => i === 0)) return 0
	const mySort = (A, B) => {
		const string1 = String(A) + String(B)
		const string2 = String(B) + String(A)
		if (string1 > string2) return -1
		else return 1
	}

	return arr.sort(mySort).join('')
}
console.log(simpleRearrange([3, 30, 34, 5, 9])) // 输出 "9534330"
console.log(simpleRearrange([10, 2])) // 输出 "210"
console.log(simpleRearrange([1, 10, 100])) // 输出 "110100"
console.log(simpleRearrange([0, 0, 0])) // 输出 "0"

console.log(rearrangeV2([3, 30, 34, 5, 9])) // 输出 "9534330"
console.log(rearrangeV2([10, 2])) // 输出 "210"
console.log(rearrangeV2([1, 10, 100])) // 输出 "110100"
console.log(rearrangeV2([0, 0, 0])) // 输出 "0"
