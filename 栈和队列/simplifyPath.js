// 简化 Unix 风格的路径
// https://leetcode-cn.com/problems/simplify-path/
// 路径之间只能有一个 /
// .. / . 有含义 , ... 视为文件目录名称

// 简单方法实现
const simplifyPath = function (path) {
	if (!path.length) return '/'
	const arr = path.split('/').filter(i => !i == '')
	const result = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '..') {
			result.length && result.pop()
		} else if (arr[i] == '.') continue
		else {
			result.push(arr[i])
		}
	}
	const ans = '/' + result.join('/')
	return ans
}

console.log(simplifyPath('/home/'))
console.log(simplifyPath('/home//page/'))
console.log(simplifyPath('/home/user/../page/'))
console.log(simplifyPath('/../'))
console.log(simplifyPath('/.../a/../b/c/../d/./'))
console.log(simplifyPath('/a//b////c/d//././/..'))
console.log(simplifyPath('/..home'))
