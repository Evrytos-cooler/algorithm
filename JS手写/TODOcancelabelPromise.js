class CancelError extends Error {
	constructor(message) {
		super(message)
		this.name = 'CancelError'
	}
}

class CancelablePromise {
	constructor(executor) {
		this._isCanceled = false // 标记是否已取消
		this._promise = new Promise((resolve, reject) => {
			// 在 executor 中检查是否被取消
			executor(
				value => {
					if (!this._isCanceled) {
						resolve(value)
					}
				},
				error => {
					if (!this._isCanceled) {
						reject(error)
					}
				}
			)
		})
	}

	then(onFulfilled, onRejected) {
		return this._promise.then(onFulfilled, onRejected)
	}

	catch(onRejected) {
		return this._promise.catch(onRejected)
	}

	cancel() {
		this._isCanceled = true
		this._promise = Promise.reject('Promise was canceled')
	}
}

// 示例用法
const promise = new CancelablePromise((resolve, reject) => {
	setTimeout(() => resolve('Done'), 1000)
})

promise.then(console.log).catch(console.error)
promise.cancel().catch(console.log) // 取消 Promise
