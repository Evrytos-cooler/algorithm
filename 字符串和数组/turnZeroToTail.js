// O(n) O(n)
const trunZeroToTail = arr => {
	if (arr.length === 0) return arr
	let count = 0
	const result = []
	for (let i of arr) {
		if (i == '0') {
			count++
			continue
		} else {
			result.push(i)
		}
	}
	for (let i = 0; i < count; i++) {
		result.push(0)
	}
	return result
}

//O(n) O(1)
//左指针停在0处，有指针停在非零处，交换。利用了快排的思想,但是这个方法不保序
const doublePoiniVersion = arr => {
	if (arr.length === 0) return arr
	let p2 = arr.length - 1
	let p1 = 0
	while (p1 < p2) {
		while (arr[p1] !== 0) p1++
		while (arr[p2] == 0) p2--
		if (p1 < p2) {
			;[arr[p1], arr[p2]] = [arr[p2], arr[p1]]
		}
	}
	return arr
}

console.log(doublePoiniVersion([0, 1, 1, 0, 1, 0]))

// 改进，两个指针都从头开始，p1指向等待替换的位置，p2去找非0元素
const doublePoiniVersionV2 = arr => {
	let p1 = 0 // 空闲位置
	for (let p2 = 0; p2 < arr.length; p2++) {
		// p2去找非0的，放到最前面
		if (arr[p2] !== 0) {
			;[arr[p1], arr[p2]] = [arr[p2], arr[p1]]
			p1++
		}
	}
	return arr
}
console.log(doublePoiniVersionV2([1, 0, 1]))
