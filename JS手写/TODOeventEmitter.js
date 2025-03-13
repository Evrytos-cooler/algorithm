class EventEmitter {
	constructor() {
		// 实现代码
	}

	on(event, listener) {
		// 实现代码
	}

	emit(event, ...args) {
		// 实现代码
	}

	off(event, listener) {
		// 实现代码
	}
}

// 示例用法
const emitter = new EventEmitter()
emitter.on('event', data => console.log(data))
emitter.emit('event', 'Hello World')
