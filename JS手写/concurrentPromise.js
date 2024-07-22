//promise并发或者PromisePool
// 1 接受一个PromiseList
// 2 接受一个并发数 concurrentCount
// 3 内部维护正在运行的数量runCount和未运行的任务列表PromiseList
// 4 当并发数变化的时候或者初始化的时候添加任务 (订阅发布模式） ：conCurrentCount - runCount
class PromisePool {
	constructor(maxConcurrent, promiseList) {
		this.promiseList = promiseList.map((item, index) => ({ index, item }))
		this.jobSum = promiseList.length
		this.maxConcurrent = maxConcurrent
		this.completeCount = 0
		this.runCount = 0
		this.allResolve = null
		this.result = []
	}

	getResult() {
		return new Promise(resolve => {
			this.allResolve = resolve
		})
	}

	run() {
		//计算需要执行的数量
		const readyToRun = Math.min(
			this.promiseList.length,
			this.maxConcurrent - this.runCount
		)

		for (let i = 0; i < readyToRun; i++) {
			this.runCount++
			const targetPromise = this.promiseList.shift()
			targetPromise
				.item()
				.then(res => {
					this.result[targetPromise.index] = res
				})
				.catch(err => {
					this.result[targetPromise.index] = err
				})
				.finally(() => {
					this.completeCount++
					this.runCount--
					if (this.completeCount === this.jobSum) {
						//已经完成可以出发resolve
						this.allResolve(this.result)
					} else {
						this.run()
					}
				})
		}
	}
}

function concurrentPromsie(maxConcurrent, promiseList) {
	const _promiseList = promiseList.map((item, index) => ({ index, item }))
	const result = []
	let allResovle
	for (let i = 0; i < maxConcurrent; i++) {
		run()
	}
	function run() {
		//从_promiseList中取出一个任务,执行后有条件的调用run
		new Promise(resolve => {
			const promiseTarget = _promiseList.shift()
			resolve(
				promiseTarget
					.item()
					.then(res => {
						result[promiseTarget.index] = res
					})
					.catch(err => {
						result[promiseTarget.index] = err
					})
			)
		}).then(() => {
			if (_promiseList.length) {
				run()
			} else {
				//这里注意，应为可能有多个Promise都在执行中，此时已经没有任务待启动，但是不是所有的任务都完成了
				if (result.length === promiseList.length) allResovle(result)
			}
		})
	}

	return new Promise(resolve => {
		allResovle = resolve
	})
}

const func1 = async () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('func1')
			resolve(1)
		}, 2000)
	})
const func2 = async () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('func2')
			resolve(2)
		}, 1000)
	})

const func3 = async () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('func3')
			resolve(3)
		}, 1000)
	})

const func4 = async () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('func4')
			resolve(4)
		}, 1000)
	})

const func5 = async () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('func5')
			resolve(5)
		}, 1000)
	})

const func6 = async () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('func6')
			resolve(6)
		}, 1000)
	})

const func7 = async () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('func7')
			resolve(7)
		}, 1000)
	})

const func8 = async () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('func8')
			resolve(8)
		}, 1000)
	})

const func9 = async () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('func9')
			resolve(9)
		}, 1000)
	})

const func10 = async () =>
	new Promise(resolve => {
		setTimeout(() => {
			console.log('func10')
			resolve(10)
		}, 1000)
	})
// const promisePool = new PromisePool(5, [
// 	func1,
// 	func2,
// 	func3,
// 	func4,
// 	func5,
// 	func6,
// 	func7,
// 	func8,
// 	func9,
// 	func10,
// ])

// promisePool.getResult().then(res => {
// 	console.log(res)
// })
// promisePool.run()

concurrentPromsie(2, [
	func1,
	func2,
	func3,
	func4,
	func5,
	func6,
	func7,
	func8,
	func9,
	func10,
]).then(res => console.log(res))
