const myInstanceof = (instance, targetObject) => {
	//错误边界判断
	if (typeof instance !== 'object' || instance === null) {
		console.log(instance, 'is not a object(or is null)')
		return false
	}
	//循环遍历原型链
	let proto = Object.getPrototypeOf(instance)
	while (proto) {
		if (proto === targetObject.prototype) {
			return true
		} else {
			proto = Object.getPrototypeOf(proto)
		}
	}
	return false
}

//迭代遍历原型链，直到null或者相等 prototype 是当前对象的prototype
const v2 = (instance, target) => {
	if (typeof instance !== 'object' || instance === null) {
		console.log('Type Error')
		return false
	}
	let proto = Object.getPrototypeOf(instance) //新的静态方法
	//找到底
	while (proto !== null) {
		if (proto === target.prototype) return true
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
