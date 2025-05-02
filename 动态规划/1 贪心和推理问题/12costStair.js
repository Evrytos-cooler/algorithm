// 传入每节楼梯的花费cost
// 花费后可以爬一节或者两节
// dp是到当前阶的最低花费 依赖前两节的内容
const costStair = cost => {
	const realCost = [0, ...cost]
	let dp0 = 0
	let dp1 = realCost[0]
	let dpTarget
	for (let i = 2; i <= realCost.length; i++) {
		dpTarget = Math.min(dp1 + realCost[i - 1], dp0 + realCost[i - 2])
		dp0 = dp1
		dp1 = dpTarget
	}
	return dpTarget
}
console.log(costStair([10, 15, 20]))
