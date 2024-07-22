//Proimse
class myPromise {
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

function myAll(promiseList) {
	const result = []
	let count = 0
	return new Promise((resolve, reject) => {
		promiseList.forEach((promise, index) => {
			promise.then(
				value => {
					result[index] = value
					count++
					if (count === promiseList.length) {
						resolve(result)
					}
				},
				reason => reject(reason)
			)
		})
	})
}

function myRace(promiseList) {
	return new Promise((resolve, reject) => {
		promiseList.forEach(promise => {
			promise.then(
				result => {
					resolve(result)
				},
				reason => {
					reject(reason)
				}
			)
		})
	})
}

//返回一个成功的Promise
// 1 参数是基本类型，直接返回
// 2 参数是Promise，直接返回
// 3 参数是一个thenable对象，返回的Promise跟随这个对象的状态
Promise.myResolve = function (params) {
	if (typeof params.then === 'function') {
		return new Promise((resovle, reject) => {
			params.then(resovle, reject)
		})
	}
	if (params instanceof Promise) {
		return params
	} else {
		return new Promise(resolve => {
			resolve(params)
		})
	}
}
Promise.myReject = function (reason) {
	return new Promise((_, reject) => {
		reject(reason)
	})
}

//finally的奇怪表现 ：除非reject，否则返回上一个promise的状态
// 1 拿不到上一个Proimse的data，但是能够返回
// 2 调用自reject的Proimse必返回reject
// 3 调用自resolve的Proimse，如果finally返回一个Promise，reject取决于此proimse，resolve取决于上一个原promise
// 4 如果finally返回Promise，总是要等Promise落定才能返回
Promise.prototype.MyFinally = function (callback) {
	return this.then(
		data => {
			// 让函数执行 内部会调用方法，如果方法是promise，需要等待它完成
			// 如果当前promise执行时失败了，会把err传递到，err的回调函数中
			return Promise.resolve(callback()).then(() => data) // data 上一个promise的成功态 , 没有失败回调
		},
		err => {
			return Promise.resolve(callback()).then(() => {
				throw err // 把之前的失败的err，抛出去
			})
		}
	)
}

const testingAll = () => {
	Promise.myAll = myAll
	const p1 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('p1')
		}, 1000)
	})
	const p2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('p2')
		}, 2000)
	})
	const p3 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('p3')
		}, 3000)
	})
	Promise.myAll([p1, p2, p3]).then(
		res => {
			console.log('result', res)
		},
		reason => {
			console.log('reason', reason)
		}
	)
}

const testRace = () => {
	Promise.myRace = myRace
	const p1 = new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('p1')
		}, 1000)
	})
	const p2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			reject('p2')
		}, 2000)
	})
	const p3 = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('p3')
		}, 3000)
	})
	Promise.myRace([p1, p2, p3]).then(
		res => console.log('result', res),
		reason => console.log('reason', reason)
	)
}

// Promise.myResolve(new Promise((_, reject) => reject(2)))
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err))
// Promise.myReject('reason').catch(reason => console.log(reason))

Promise.myReject(1)
	.MyFinally(() => {
		return Promise.reject(2)
	})
	.then(
		res => console.log(res),
		err => console.log(err)
	)
