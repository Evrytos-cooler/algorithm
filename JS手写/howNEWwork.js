//new做了啥？
// 1 创建一个新的对象
// 2 为这个对象确定prototype
// 3 为这个对象绑定this
// 4 返回一个新的对象

//构造函数
function Person(name, age) {
	this.name = name
	this.age = age
}
Person.prototype.say = function () {
	console.log(this.name, 'say')
}

const myNew = (constructor, ...args) => {
	//创建一个新对象，继承构造函数的原型对象上的属性
	const target = Object.create(constructor.prototype)
	//绑定this为新对象，然后传入参数 ,注意构造函数可以显示的返回一个值
	const res = constructor.apply(target, args)
	return res instanceof Object ? res : target
}

const person = myNew(Person, 'xiaoming', 18)
person.say()
