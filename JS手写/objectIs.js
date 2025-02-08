// 解决NaN !== NaN 和 +0 === -0 的问题
const myObjectIs = (left, right) => {
	if (left === right) {
		if (left === 0) {
			return 1 / left === 1 / right
		}
		return true
	} else {
		if (Number.isNaN(left)) {
			return Number.isNaN(right)
		}
		return false
	}
}

console.log(myObjectIs(+0, -0), myObjectIs(NaN, NaN))
