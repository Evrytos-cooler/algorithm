// instanceof 查找某个对象是否在另一个对象的原型链上
// 构造函数FUNC创建的实例func，func.__proto__ 指向 FUNC.prototype
const myInstanceof = function (leftObj, rightObj) {
	if (typeof leftObj !== 'object' || leftObj === null) {
		// throw new Error('TypeError')
		console.log('TypeError')
		return null
	}
	let proto = Object.getPrototypeOf(leftObj)
	while (proto) {
		if (proto === rightObj.prototype) return true
		else proto = Object.getPrototypeOf(proto)
	}
	return false
}

const testingInstanceof = () => {
	const arr = [[], [], null, undefined, 3, 'acd']
	for (let instance of arr) {
		if (myInstanceof(instance, Array)) {
			console.log(Object.prototype.toString.bind(instance)(), 'Array')
		}
		if (myInstanceof(instance, Object)) {
			console.log(Object.prototype.toString.bind(instance)(), 'Object')
		}
	}
}

testingInstanceof()
