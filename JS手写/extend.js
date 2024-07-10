function Parents() {
	this.name = 'parentsName'
	this.home = 'shenzhen'
}
Parents.prototype.say = function () {
	console.log('Hello, I am ', this.name)
}

function Child() {
	//在这里集成构造构造函数上的属性
	Parents.call(this)
	this.name = 'childName'
}
//在这里继承原型
Child.prototype = Object.create(Parents.prototype)
Child.constructor = Child
//继承原型之后要把构造函数指回来
const child1 = new Child()

child1.say()
console.log(child1.home, child1.name)
