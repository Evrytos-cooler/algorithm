/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
	const targetSum = n
	const sum = 0
	const result = []
	const path = []
	const traceBack = (sum, startIndex) => {
		//剪枝操作
		if (sum > targetSum) return
		//step1判断结束条件
		if (path.length === k) {
			if (sum === targetSum) result.push(path.slice())
			return
		}

		//step2处理循环逻辑
		for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
			//操作
			path.push(i)
			sum += i
			//递归
			traceBack(sum, i + 1)
			//回溯
			path.pop()
			sum -= i
		}
	}
	traceBack(sum, 1)
	return result
}
const result = combinationSum3(3, 7)
for (let i of result) {
	console.log(i)
}
