// ip 地址的格式为 ：x.x.x.x , 如果x是二进制，那么把点去掉就是他的整数形式，转换为10进制返回

// ip 地址转为整数
// 入参 x.x.x.x（二进制） 返回十进制的ip整数
// 通过每一个字段的左移，变成对应二进制然后相加,左移动可能出现负数，所以我们要将符号为舍去 使用 >>> 0
const ipTransferToInt = ip => {
	let result = 0
	for (let i = 0; i < ip.length; i++) {
		result += (ip[i] << (8 * (3 - i))) >>> 0
	}
	return result
}
// 整数转为 ip 地址
// 通过每一个字段的右移动并截取， 右移动是不会出现负数的
const intTransferToIp = int => {
	let ip = []
	for (let i = 0; i < 4; i++) {
		ip[i] = (int >> (8 * (3 - i))) & 0xff
	}
	return ip
}

const ip = [255, 255, 255, 255]
const number = ipTransferToInt(ip)
const ip_result = intTransferToIp(number)
console.log(number, ip_result)
