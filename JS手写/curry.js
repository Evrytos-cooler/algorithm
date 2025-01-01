const createCurry = func => {
	let args = []
	const length = func.length
	function curry(...args1) {
		args = [...args, ...args1]
		if (length > args.length) {
			return curry
		} else {
			return func.apply(this, args)
		}
	}
	return curry
}

function curry(fn) {
	const fnArgsLength = fn.length // 传入函数的参数长度
	let args = []

	function calc(...newArgs) {
		// 积累参数保存到闭包中
		args = [...args, ...newArgs]
		// 积累的参数长度跟传入函数的参数长度对比
		if (args.length < fnArgsLength) {
			// 参数不够，返回函数
			return calc
		} else {
			// 参数够了，返回执行结果
			return fn.apply(this, args.slice(0, fnArgsLength)) // 传入超过fnArgsLength长度的参数没有意义
		}
	}

	// 返回一个函数
	return calc
}
console.log(createCurry((a, b, c) => a + b + c)(1)(2)(3)) // 6
