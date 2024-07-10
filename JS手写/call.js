//call做了什么 ： 传入参数调用函数，并且改变函数内部的this指向
//注意这里不能使用箭头函数
Function.prototype.myCall = function (context, ...args) {
	//context可能是一个对象，也可能是一个值
	context = typeof context === 'object' ? context : Object.create({})
	//this是函数，context是要函数的this
	let fnkey = Symbol()
	//不是给函数this赋值，而是让这个函数是context的属性
	context[fnkey] = this
	let result = context[fnkey](...args)
	delete context[fnkey]
	return result
}

Function.prototype.myApply = function (context, args) {
	//处理context
	context = typeof context === 'object' ? context : Object.create({})
	//挂在函数在context上 (使用symbol)
	const key = Symbol()
	context[key] = this
	let result = context[key](...args)
	delete context[key]
	//返回函数的执行
	return result
}

Function.prototype.myBind = function (context, ...args1) {
	//保存当前你this
	const self = this
	//处理context
	context = typeof context === 'object' ? context : Object.create({})
	//使用symbol为context添加当前函数
	let key = Symbol()
	context[key] = this
	delete context[key]

	//分为普通函数调用和构造函数调用
	//要保证返回的函数如果是一个构造函数的话，方法和属性不丢失
	// return this(...args1.concat(arg2)) //这样不行,因为被当前箭头函数调用，this指向myBind函数
	//不能用箭头函数，因为他不能用作构造函数,所以要保存this

	const result = function (...arg2) {
		//特殊处理被当作构造函数使用的情况:当这个函数被当作构造函数使用，这个对象（this）就是这个构造函数的实例
		if (this instanceof result) {
			//new操作符干的事情

			return self.apply(this, args1.concat(arg2)) //this对象(使用构造函数创建的对象）上才有type属性
		} else {
			return self.apply(context, args1.concat(arg2)) //函数的this是context 作为函数使用是没有type属性的，（没有作为构造函数使用，不产生属性）
		}
	}
	//避免不小心修改原型
	result.prototype = Object.create(this.prototype)
	return result
	//返回一个函数
}

const xiaoming = {
	name: 'xiaoming',
}
function say(number1, number2) {
	//只有当say当作构造函数使用的时候才会设置
	this.type = 'constructor'
	console.log(this.name + number1.toString() + number2.toString())
}

say.myCall(xiaoming, 10, 10)
say.myApply(xiaoming, [10, 20])
say.myBind(xiaoming, 10)(30)
//bind方法比较复杂，返回的不能是原函数，否则this不会被绑定

//作为普通函数使用
say.myBind(xiaoming, 10)(40)
//作为构造函数使用
const newsay = say.myBind(xiaoming)
const instance = new newsay(10, 20) //new生成的是一个对象
console.log(instance.type)
