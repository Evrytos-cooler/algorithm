// Object.assign 将一个或者多个对象自身的可枚举属性浅拷贝到target上
Object.prototype.myObjectAssign = (target, ...args) => {
	const result = Object(target) // 基本类型则包装成对象，对象则直接返回
	for (let resource of args) {
		for (let key of Object.keys(resource)) {
			result[key] = resource[key]
		}
	}
	return result
}

const obj1 = {
	a: 1,
	b: 2,
	c: 3,
}

const obj2 = {
	aa: [1],
	bb: [2],
}

const o = {}
const b = {}
Object.myObjectAssign(o, obj1, obj2)
