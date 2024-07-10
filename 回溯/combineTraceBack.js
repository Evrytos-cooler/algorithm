/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	let result = []
	let temp = []
	const traceBack = startIndex => {
		//step1判断结束条件
		if (temp.length === k) {
			//注意一定要创建副本
			result.push(temp.slice())
			return
		}
		//step2处理循环逻辑
		for (let i = startIndex; i <= n - (k - (temp.length + 1)); i++) {
			temp.push(i)
			traceBack(i + 1)
			temp.pop() //有借有还，保证一个回合后temp长度空
		}
	}
	traceBack(1)
	return result
}

console.log(combine(4, 2))
