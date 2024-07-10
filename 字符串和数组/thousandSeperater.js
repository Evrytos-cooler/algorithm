/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
	//处理不需要管的部分
	if (n < 1000) return n.toString()
	const sumLength = n.toString().length
	const temp = []
	let j = 0
	for (let i = sumLength - 1; i >= 0; i--) {
		j++
		temp.push(n.toString().split('')[i])
		if (j % 3 === 0 && i !== sumLength - 1 && i !== 0) {
			temp.push('.')
		}
	}
	return temp.reverse().join('')
}
console.log(thousandSeparator(1234567890999999))
