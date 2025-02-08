// 核心逻辑 1 调度器在promise落定的时候递归，计算当前能够执行的个数
// 核心逻辑 2 PromisePool的状态所有promise落定的时候改变，返回所有result组成的数组
class PromisePool {
	constructor(maxConcurrent, promiseList) {
		this.maxConcurrent = maxConcurrent
		this.promiseList = promiseList.map((item, index) => {
			return { item, index }
		})
		this.promiseLength = promiseList.length
		this.runningCount = 0
		this.settleCount = 0
		this.allSettle = undefined
		this.result = []
		this.promise = new Promise(resolve => {
			this.allSettle = resolve
		})
	}

	run() {
		const readyToRun = Math.min(
			this.promiseList.length,
			this.maxConcurrent - this.runningCount
		)
		for (let i = 0; i < readyToRun; i++) {
			const target = this.promiseList.shift()
			this.runningCount++
			target
				.item()
				.then(res => {
					this.result[target.index] = res
				})
				.catch(e => {
					this.result[target.index] = e
				})
				.finally(() => {
					this.settleCount++
					this.runningCount--
					if (this.settleCount === this.promiseLength) {
						this.allSettle(this.result)
					} else {
						this.run()
					}
				})
		}
		return this.promise
	}
}
function concurrentPromsie(maxConcurrent, promiseList) {
	const proimseLength = promiseList.length
	promiseList = promiseList.map((item, index) => {
		return { item, index }
	})
	let runningCount = 0
	let settleCount = 0
	let allsettle = null
	let result = []
	let promise = new Promise(resolve => {
		allsettle = resolve
	})

	function run() {
		const readyToRun = Math.min(promiseList.length, maxConcurrent - runningCount)
		for (let i = 0; i < readyToRun; i++) {
			runningCount++
			const target = promiseList.pop()
			target
				.item()
				.then(res => {
					result[target.index] = res
				})
				.catch(e => {
					result[target.index] = e
				})
				.finally(() => {
					runningCount--
					settleCount++
					if (settleCount === proimseLength) {
						allsettle(result)
					} else {
						run()
					}
				})
		}
		return promise
	}

	return run()
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

// const promisePool = new PromisePool(3, [
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

// promisePool.run().then(res => console.log(res))

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
