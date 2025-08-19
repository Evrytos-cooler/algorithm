// Promise构造函数：
// 入参: 一个executor回调，传入resolve和reject执行
// resolve & reject: 只能调用一次，修改promise状态，触发回调列表
// then & catch: 落定和pending状态分别处理，pending则回调入队列,继续返回Promise
// finally: 不接受参数，不破坏promise链条，返回原本的resolve/reject
class MyPromise {
	constructor(executor) {
		this.status = 'pending'
		this.value = undefined
		this.reason = undefined
		this.onRejectCallback = []
		this.onResolveCallback = []

		let resolve = value => {
			if (this.status === 'pending') {
				this.status = 'resolved'
				this.value = value
				this.onResolveCallback.forEach(fn => fn())
			}
		}
		let reject = reason => {
			if (this.status === 'pending') {
				this.status = 'rejected'
				this.reason = reason
				this.onRejectCallback.forEach(fn => fn())
			}
		}

		try {
			executor(resolve, reject)
		} catch (err) {
			reject(err)
		}
	}

	then(onFulfilled, onRejected) {
		return new MyPromise((resolve, reject) => {
			if (this.status === 'pending') {
				this.onResolveCallback.push(() => {
					try {
						let result = onFulfilled(this.value)
						resolve(result)
					} catch (e) {
						reject(e)
					}
				})
				this.onRejectCallback.push(() => {
					try {
						let result = onRejected(this.reason)
						// 这里就是相较于 catch 的区别，then 不会将 reject 转化为 resolve 的 promise
						reject(result)
					} catch (e) {
						reject(e)
					}
				})
			} else if (this.status === 'resolved') {
				try {
					let result = onFulfilled(this.value)
					resolve(result)
				} catch (e) {
					reject(e)
				}
			} else if (this.status === 'rejected') {
				try {
					let result = onRejected(this.reason)
					reject(result)
				} catch (e) {
					reject(e)
				}
			}
		})
	}

	catch(onRejected) {
		return new MyPromise((resolve, reject) => {
			if (this.status === 'pending') {
				try {
					this.onRejectCallback.push(() => {
						let result = onRejected(this.reason)
						// then 也能够处理失败回调，为什么要有 catch？因为 catch 能够将 reject 修改为 resolve 的 Promise
						resolve(result)
					})
				} catch (e) {
					reject(e)
				}
			} else if (this.status === 'rejected') {
				try {
					let result = onRejected(this.reason)
					resolve(result)
				} catch (e) {
					reject(e)
				}
			}
		})
	}

	static all(promises) {
		return new MyPromise((resolve, reject) => {
			const result = []
			let fulfillCount = 0
			promises.forEach((p, i) =>
				p.then(value => {
					try {
						result[i] = value
						fulfillCount++
						if (fulfillCount === promises.length) resolve(result)
					} catch (e) {
						reject(e)
					}
				}, reject)
			)
		})
	}

	static race(promises) {
		return new MyPromise((resolve, reject) => {
			promises.forEach(p => p.then(value => resolve(value)))
		})
	}

	static reject(reason) {
		return new MyPromise((_, reject) => {
			reject(reason)
		})
	}

	// 传入promise直接返回
	// 传入thanable则跟随状态
	// 传入初始值返回resolve
	static resolve(value) {
		return new MyPromise((resolve, reject) => {
			if (typeof value.then === 'function') {
				value.then(resolve, reject)
			} else if (value instanceof Promise || value instanceof MyPromise) {
				return value
			} else {
				return resolve(value)
			}
		})
	}
}

const promise1 = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve('promise1')
	}, 1000)
})
const promise2 = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve('promise2')
	}, 2000)
})

const promise3 = new MyPromise((resolve, reject) => {
	setTimeout(() => {
		resolve('promise3')
	}, 3000)
})

const promise = MyPromise.race([promise1, promise2, promise3]).then(
	v => console.log(v),
	e => {
		console.log(e)
	}
)

MyPromise.resolve('promiseResolve').then(v => console.log(v))
MyPromise.resolve(new MyPromise((_, rj) => rj('promise inside promise'))).then(
	v => console.log('1' + v),
	r => console.log('2' + r)
)
MyPromise.reject('promiseResolve').then(null, v => console.log(v))
