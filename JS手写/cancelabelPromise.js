// Promise 类型题目思考方式： 对 Promise 的更改是在落定前还是在落定后
// cancel 只有在落定前才有效，所以需要拦截 cancel 之后的 resolve / reject
// 由于 cancel 之后可以不用关心原本的 promise，所以可以返回一个新 promise.reject()

// 拦截resolve / reject 做法
class CancelablePromise {
	constructor(executor) {
		this.canceled = false
		this._promise = new Promise((resolve, reject) => {
			executor(
				res => {
					if (!this.canceled) resolve(res)
				},
				err => {
					if (!this.canceled) reject(err)
				}
			)
		})
	}

	// 由于 this 不是 promise 本身， 而是一层代理，所以我们需要将 then 和 catch 等方法也代理到目标 promise 上
	then(...args) {
		return this._promise.then(...args)
	}
	catch(...args) {
		return this._promise.catch(...args)
	}
	finally(...args) {
		return this._promise.finally(...args)
	}

	// cancel 之后使用 canceled 拦截 promise 上的落定回调
	// 返回一个新的 promise.reject()
	cancel(onCancel) {
		this.canceled = true
		return Promise.reject('Promise canceled').catch(onCancel)
	}
}

const promise = new CancelablePromise((resolve, reject) => {
	setTimeout(() => resolve('Done'), 1000)
})

promise.then(console.log).catch(console.log)
promise.cancel(console.log)

// 使用 race 写法
// 如果 cancel 了，then 和 catch 不能在原本的 promise 上执行，我们可以选择使用一个标志位拦截，（上一个做法）。
// 或者使用 Promise.race 将 then , catch 等方法选择性的挂载到 cancel Promise / promise 上
// 将cancel 修改为自动执行的，timeoutPromise 就完成了
class CancelablePromiseV2 {
	constructor(executor) {
		this.promise = new Promise(executor)
		this.canceled = null
		this.cancelPromise = new Promise((_, reject) => {
			this.canceled = reject
		})
		this.racePromise = Promise.race([this.promise, this.cancelPromise])
	}

	then(onFulfilled, onRejected) {
		return this.racePromise.then(onFulfilled, onRejected)
	}

	catch(onRejected) {
		return this.racePromise.catch(onRejected)
	}

	finally(onFinally) {
		return this.racePromise.finally(onFinally)
	}

	cancel(reason = 'Promise canceled') {
		this.canceled(reason)
	}
}

// 使用示例
const promiseV2 = new CancelablePromiseV2((resolve, reject) => {
	setTimeout(() => resolve('Done'), 1000)
})

promiseV2.then(console.log).catch(console.log) // 如果未取消，输出 'Done'
promiseV2.cancel() // 取消 Promise，输出 'Promise canceled'
