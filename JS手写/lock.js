function asyncLock() {
	// 实现代码
	this.locked = false

	this.release = function () {
		this.locked = false
	}
	this.acquire = function () {
		return new Promise((resovle, reject) => {
			if (!this.locked) {
				this.locked = true
				resovle()
			} else {
				reject('resource locked')
			}
		})
	}
}

// 示例用法
const lock = new asyncLock()
lock.acquire().then(() => {
	console.log('Lock acquired')
	setTimeout(() => lock.release(), 1000)
})
lock.acquire()
	.then(() => {
		console.log('Lock acquired again')
	})
	.catch(console.log)
