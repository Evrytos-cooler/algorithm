//接受两个参数
Array.prototype.nativeReduce = function (callback, initialValue) {
	const accumulator = initialValue ?? this[0]
	for (let i = 0; i < this.length; i++) {
		//callback接受参数：累加器，当前值，当前索引，数组本身
		accumulator = callback(accumulator, this[i], i, this)
	}
	return accumulator
}

Array.prototype.myReduce = function (callback, initialValue) {
	//初始化默认参数
	let accumulator = initialValue ?? this[0]
	for (let i = 0; i < this.length; i++) {
		accumulator = callback(accumulator, this[i], i, this)
	}
}
//接收一个回调，回调接收两个参数，一个是item，一个是index，返回值作为数组新元素返回一个数组，不修改原来的值
Array.prototype.nativeMap = function (callback) {
	const newArray = []
	for (let i = 0; i < this.length; i++) {
		newArray.push(callback(this[i], i, this))
	}
	return newArray
}
