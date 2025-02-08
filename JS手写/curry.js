// 返回一个函数
// 闭包保存参数
// 数量够就执行，不够继续返回函数
function createCurry(func) {
	let args = []
	const length = func.length
	const curry = function (...restArgs) {
		args = [...args, ...restArgs]
		if (args.length < length) {
			return curry
		} else {
			return func.apply(this, args.slice(0, length))
		}
	}
	return curry
}

console.log(createCurry((a, b, c) => a + b + c)(1)(2)(3)) // 6
