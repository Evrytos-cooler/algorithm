// s >= t
// 也是编辑距离的思路，不同的是相同的时候我们可以不选择当前的数
// dp[i][j] 指以 arra[i-1] 和 arrb[j-1] 为尾部的子串，s能组成t的方式数量
const numDistinct = (s, t) => {
	const arra = s.split('')
	const arrb = t.split('')
	const dp = new Array(arra.length + 1)
		.fill()
		.map(() => new Array(arrb.length + 1).fill(0))

	// 这里的初始化比较特殊，对于空串，不管arra多长，总是有一种方法组成，就是不选
	for (let i = 0; i <= arra.length; i++) {
		dp[i][0] = 1
	}
	for (let i = 1; i <= arra.length; i++) {
		for (let j = 1; j <= arrb.length; j++) {
			if (arra[i - 1] === arrb[j - 1]) {
				// 这里比较难理解： 第一项 选择了 arra[i-1] 是 arra[i-2]arrb[i-2]为结尾的数量，因为我同时选择的s和t串的一个字符，所以这里没有新增方式。
				//  第二项是不选当前 arra[i-1], 那么就是模拟删除 arra[i-1]这一项, 其方法数是便利到arra[i-2]的时候的方法，也即 dp[i-1][j]
				dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
			} else {
				dp[i][j] = dp[i - 1][j]
			}
		}
	}
	return dp[arra.length][arrb.length]
}
console.log(numDistinct('rabbbit', 'rabbit'))
