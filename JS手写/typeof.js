// 直接调用object原型上的toString，避免调用重写后的tostring
//slice 可用于数组和字符串但是splice不可用于字符串
const nativeTypeof = value => {
	return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}
console.log(nativeTypeof(''))
console.log(nativeTypeof([]))
console.log(nativeTypeof({}))
console.log(nativeTypeof(10))
console.log(nativeTypeof(null))
