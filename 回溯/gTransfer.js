// 计算正整数x的二进制表示中1的个数
function g(x) {
	// numbser.toString() 能够实现进制转换
	return x.toString(2).split('0').join('').length
}

// 使用 g(x) 让两个数相同的，返回修改后的数和次数
function toSame(a, b) {
	let count = 0
	while (a !== b) {
		a > b ? (a = g(a)) : (b = g(b))
	}
	return [a, count]
}

// 检查两个数组是否同构（排序后是否相同）
function isIsomorphic(a, b) {
	if (a.length !== b.length) return false
	const sortedA = [...a].sort((x, y) => x - y)
	const sortedB = [...b].sort((x, y) => x - y)
	return sortedA.every((val, idx) => val === sortedB[idx])
}

// 回溯，我们需要对
function backtrack(A, B, index, currentA, currentB, steps, minSteps) {
	if (isIsomorphic(A, B)) {
		minSteps.value = Math.min(minSteps.value, steps)
	}
}

// 主函数：计算使A和B同构的最少操作次数
function minOperationsToIsomorphic(A, B) {
	if (A.length !== B.length) return -1 // 长度不同无法同构

	const n = A.length
	const minSteps = { value: Infinity } // 使用对象以便在函数中修改

	backtrack(A, B, 0, new Array(n), new Array(n), 0, minSteps)

	return minSteps.value === Infinity ? -1 : minSteps.value
}

// 示例用法
const A = [1, 2, 3]
const B = [4, 5, 6]
console.log(`最少操作次数: ${minOperationsToIsomorphic(A, B)}`)
