// 使用 race 实现
class PromiseWithTimeout {
	constructor(executor, timeout) {
		this.promise = new Promise(executor)
		this.cancelPromise = new Promise((_, reject) => {
			setTimeout(() => reject('timeout'), timeout)
		})
		this.racePromise = Promise.race([this.promise, this.cancelPromise])
	}

	then(...args) {
		return this.racePromise.then(...args)
	}
	catch(...args) {
		return this.racePromise.catch(...args)
	}
	finally(...args) {
		return this.racePromise.finally(...args)
	}
}

const timeoutPromise = new PromiseWithTimeout(
	resolve => setTimeout(() => resolve('Data'), 999),
	1000
)
timeoutPromise.then(console.log).catch(error => console.error(error)) // 输出超时错误

// 结合 cancelablePromise 来看，我们也可以使用 cancel 拦截实现 timeout
// 有一点不同的是，promise timeout 我们可能还需要向上面挂载东西，不如 race 做法
class TimeoutPromiseV2 {
	constructor(executor, timeout) {
		this.timeout = false
		this.promise = new Promise((resolve, reject) => {
			executor(
				res => {
					if (!this.timeout) resolve(res)
				},
				err => {
					if (!this.timeout) reject(err)
				}
			)
		})
		setTimeout(() => {
			this.timeout = true
			this.promise = new Promise.reject('timeout')
		}, timeout)
	}

	then(...args) {
		return this.promise.then(...args)
	}
	catch(...args) {
		return this.promise.catch(...args)
	}
	finally(...args) {
		return this.promise.finally(...args)
	}
}
