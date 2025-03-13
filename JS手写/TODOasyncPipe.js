function pipe(...fns) {
	// 实现代码
}

// 示例用法
const add = x => new Promise(resolve => setTimeout(() => resolve(x + 1), 500))
const multiply = x => new Promise(resolve => setTimeout(() => resolve(x * 2), 500))

pipe(add, multiply)(1).then(console.log) // 输出 4
