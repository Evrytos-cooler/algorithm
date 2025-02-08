class eventEmitter {
	constructor(value) {
		this.value = value ?? {}
		this.callbacks = []
	}

	on(func) {
		if (typeof func !== 'function') {
			throw new Error('TypeError')
		} else {
			this.callbacks.push(func)
		}
	}

	off(func) {
		if (typeof func !== 'function') {
			throw new Error('TypeError')
		} else {
			this.callbacks = this.callbacks.filter(f => f !== func)
		}
	}

	emit(data) {
		this.callbacks.forEach(func => {
			func(data, this.value)
		})
	}
}

const bus = new eventEmitter({ count: 0 })
const a = params => {
	console.log('a' + params)
}
bus.on(a)

const b = params => {
	console.log('b' + params)
}
bus.on(b)

bus.emit('1')
bus.off(a)
bus.emit('2')
