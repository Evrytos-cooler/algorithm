//实现类型判断函数
function nativeTypeof(target) {
	//不是对象
	// 是对象
	if (target === null) return 'null'
	return Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
}
console.log(nativeTypeof(''))
console.log(nativeTypeof([]))
console.log(nativeTypeof({}))
console.log(nativeTypeof(10))
