//有序的数组
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
	let result = 0
	let sum = arr.reduce((prev, cur) => {
		return prev + cur
	}, 0)
	if (sum % 3 !== 0 || arr.length < 3) return false
	sum /= 3
	let temp = 0
	for (let num of arr) {
		temp += num
		if (temp === sum) {
			result++
			temp = 0
		}
	}
	if ((sum === 0 && result >= 3) || result === 3) {
		return true
	}
	return false
}
