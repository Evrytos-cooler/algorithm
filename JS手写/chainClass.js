class ChainRun {
	constructor() {
		this.chain = []
		this.lockRelease = false
	}

	func1(callback) {
		if (typeof callback !== 'function') throw new Error('TypeError')
		if (this.lockRelease) {
			callback()
		} else {
			this.chain.push(callback)
		}
		return this
	}

	func2(callback) {
		if (typeof callback !== 'function') throw new Error('TypeError')
		if (this.lockRelease) {
			callback()
		} else {
			this.chain.push(callback)
		}
		return this
	}

	settle(callback) {
		if (typeof callback !== 'function') throw new Error('TypeError')
		this.chain.push(callback)
		setTimeout(() => {
			this.lockRelease = true
			this.chain.forEach(func => func())
		}, 1000)
		return this
	}
}

const chain = new ChainRun()
const f = x => () => {
	console.log(x)
}
chain.func1(f(1)).func2(f(2)).settle(f(3)).func1(f(4)).func2(f(5))
