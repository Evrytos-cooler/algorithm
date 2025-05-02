// valuelist是首尾相连的
// 将换拆成线性数组，去头或者去尾分别计算
import robbring from './4robbring.js'
const robbring2 = value => {
	const result = Math.max(
		robbring(value.slice(1)),
		robbring(value.slice(0, value.length - 1))
	)
	return result
}
console.log(robbring2([2, 3, 2]))
