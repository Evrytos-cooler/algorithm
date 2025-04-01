// 总结，都是在确定一个数的前提下，去找剩下的子问题的解
// 使用不超过m的整数，使其和等于n，输出所有结果
// 考虑暴力回溯（相当于找出数组中所有能够组成m的集合，只不过这里的数组由m确定,而且可以用无数次）
const addMtoNTraceback = (m, n) => {
	const result = []
	const temp = []
	let sum = 0
	const map = new Map()
	const traceBack = startNum => {
		// 处理结束情况
		if (startNum > m || m > n) return
		if (sum === n) {
			if (!map.get(temp.join())) {
				map.set(temp.join(), 1)
				result.push(temp.slice())
			}
			return
		}
		if (sum > n) return

		// 处理单层逻辑
		// 选择这个而且用完了
		sum += startNum
		temp.push(startNum)
		traceBack(startNum + 1)
		temp.pop()
		sum -= startNum
		// 选择这个但是还继续用
		sum += startNum
		temp.push(startNum)
		traceBack(startNum)
		temp.pop()
		sum -= startNum
		// 不选这个
		traceBack(startNum + 1)
	}
	traceBack(1)
	return result.map(i => i.join(' + '))
}

// 确定一个值，更改另一个值的做法
// 对于入参 m n, 结果一定包含从 m 到 1 为其中一个因子的结果（至少一个），我们可以由此拆分运算
//  比如用 12345 组成 8
// (循环确定12345）先确定一个 5 ， 那么子问题变成了用 1234 组成 3 ， 这个问题其实和原本的解法一样
// 1. 5 map ==> 8 - 5 子问题,这里能够继续用 5 的
// 2. 4 map ==> 8 - 4 子问题 (注意这里是不可以回头拿5的)
// 3. 3 map ==> 8 - 3 子问题
// ...
// 5 1 map ==> 8 - 1 子问题
const addMtoN = (m, n) => {
	// traceBack 实现的是用 m 为一个选项的所有构成 n 的式子:Array<String>
	const traceBack = (m, n) => {
		const temp = []
		// 一次选择一个target
		for (let target = m; target > 0; target--) {
			// 用target 去 map 递归的结果,能继续用当前元素，当然太大了就不行了
			// 特殊处理不需要继续递归的情况
			if (target > n) continue
			if (target === n) {
				// 处理只有一个元素的情况
				temp.push(`${target}`)
				continue
			}
			if (n - target > 0) {
				// 处理 m 为其中一个元素的情况
				temp.push(...traceBack(target, n - target).map(i => `${target} + ${i}`))
			}
		}
		return temp
	}
	const result = traceBack(m, n)
	return result
}

// 既然都可以拆解为子问题了，那么直接用递归也是可以的，类似于背包问题，用 dp[i] 表示放满重量为j的背包的序列
const addMtoNDP = (m, n) => {
	// m是待选序列 ，n是背包重量
	const dp = Array.from({ length: n + 1 }, () => [])
	dp[0] = [[]]

	// 这里的num蕴含的逻辑是必须选择当前 num
	for (let num = 1; num < m + 1; num++) {
		// 为什么这里是sum: 以为如果当前 num 大于 sum，则无法选中当前num，无法处理
		for (let sum = num; sum < n + 1; sum++) {
			dp[sum].push(...dp[sum - num].map(s => [num, ...s]))
		}
	}
	return dp[n].map(i => i.join(' + '))
}

console.log(addMtoNTraceback(3, 3))
console.log(addMtoN(3, 3))
console.log(addMtoNDP(3, 3))
