//call & apply 做了什么
// 提前处理，context是一个对象，不是则创建空对象
// 1. 返回被调用方执行结果
// 2. 被调用函数的剩下文是传入的context
// 3. 剩余参数传入被执行函数
Function.prototype.myCall = function (context, ...args) {
	context = typeof context === 'object' ? context : Object.create({})
	const key = new Symbol()
	context[key] = this // .前面的就是需要调用的函数
	const result = context[key](...args)
	delete context[key]
	return result
}
Function.prototype.myApply = function (context, args) {
	context = typeof context === 'object' ? context : Object.create({})
	const key = new Symbol()
	context[key] = this // .前面的就是需要调用的函数
	const result = context[key](...args)
	delete context[key]
	return result
}

//bind 做了什么， func.bind()
// 传入需要绑定的context
// 传入的剩余参数传入,函数柯里化
// 对执行new的函数做特殊处理 -- bind绑定的this对new操作符是无效的
// this是更改context的函数
Function.prototype.myBind = function (context = window, ...args) {
	const self = this
	const result = function (restArgs) {
		self.apply(this instanceof result ? this : context, restArgs.concat(args))
	}
	result.prototype = this.prototype
	return result
}

const Person = {
	a: 1,
	b: 2,
}

const a = function () {
	console.log(this.a)
}

const b = a.myBind(Person)
const c = new a()

console.log(c instanceof b)
console.log(c instanceof a)
