//Proimse.resolve
//Promise.reject
//Proimse
export class myPromise {
	constructor(executor) {
		this.status = 'pending'
		this.value = undefined
		this.reason = undefined
		this.onFulfilledCallbacks = []
		this.onRejectedCallbacks = []

		let resolve = value => {
			if (this.status === 'pending') {
				this.status = 'resolved'
				this.value = value
				this.onFulfilledCallbacks.forEach(fn => fn())
			}
		}

		let reject = reason => {
			if (this.status === 'pending') {
				this.status = 'rejected'
				this.reason = reason
				this.onRejectedCallbacks.forEach(fn => fn())
			}
		}

		try {
			executor(resolve, reject)
		} catch (err) {
			reject(err)
		}
	}

	then(onFulfilled, onRejected) {
		return new myPromise((resolve, reject) => {
			if (this.status === 'resolved') {
				try {
					let x = onFulfilled(this.value)
					resolve(x)
				} catch (e) {
					reject(e)
				}
			}
			if (this.status === 'rejected') {
				try {
					let x = onRejected(this.reason)
					resolve(x)
				} catch (e) {
					reject(e)
				}
			}
			if (this.status === 'pending') {
				this.onFulfilledCallbacks.push(() => {
					try {
						let x = onFulfilled(this.value)
						resolve(x)
					} catch (e) {
						reject(e)
					}
				})
				this.onRejectedCallbacks.push(() => {
					try {
						let x = onRejected(this.reason)
						resolve(x)
					} catch (e) {
						reject(e)
					}
				})
			}
		})
	}

	//利用率promise只能落定一次的特点
	static race(promises) {
		return new myPromise((resolve, reject) => {
			promises.forEach(p => {
				//给所有的promise都挂在一个回调，当任何一个promise落定的时候，本函数就会落定
				p.then(resolve, reject)
			})
		})
	}

	static all(promises) {
		let result = []
		let count = 0
		return new myPromise((resolve, reject) => {
			//如果全部resolve才resolve否则reject
			promises.forEach((p, i) => {
				p.then(value => {
					result[i] = value
					count++
					if (count === promises.length) {
						resolve(result)
					}
				}, reject)
			})
		})
	}
}
//Promise.all
