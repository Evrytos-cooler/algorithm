// new 只能对构造函数调用
// 创建对象，绑定原型为构造函数的原型
// 执行构造函数并绑定this
// 返回构造函数结果或者创建的对象
const myNew = function (constructor, ...args) {
	const o = Object.create(constructor.prototype)
	const result = constructor.apply(o, args)
	return typeof result === 'object' && result !== null ? result : o
}
const Person = function () {
	this.name = 'alisachen'
	this.say = function () {
		console.log('alisachen say: hello', this.name)
	}
}
const person = myNew(Person)
person.say()
