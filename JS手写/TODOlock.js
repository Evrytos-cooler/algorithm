function asyncLock() {
	// 实现代码
}

// 示例用法
const lock = asyncLock()
lock.acquire().then(() => {
	console.log('Lock acquired')
	setTimeout(() => lock.release(), 1000)
})
lock.acquire().then(() => {
	console.log('Lock acquired again')
})
