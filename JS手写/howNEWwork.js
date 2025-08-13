// new 只能对构造函数调用
// 1. 创建新对象
// 2. 将新对象的原型指向构造函的原型
// 3. 绑定 this 并执行构造函数
// 4. 如果构造函数返回 obj 直接返回，否则返回创建的对象
const myNew = function (constructor, ...args) {
	const o = Object.create(constructor.prototype)
	const result = constructor.apply(o, args)
	return typeof result === 'object' && result !== null ? result : o
}

const myNewV2 = function (constructor, ...args) {
	const newObj = Object.create({})
	// 注意实例的原型和构造函数的原型的访问方式
	// newObj.__proto__ = constructor.prototype
	Object.setPrototypeOf(newObj, constructor.prototype)
	const result = constructor.apply(newObj, args)
	return typeof result === 'object' && result !== null ? result : newObj
}
const Person = function () {
	this.name = 'alisachen'
	this.say = function () {
		console.log('alisachen say: hello', this.name)
	}
}
const person = myNew(Person)
person.say()
