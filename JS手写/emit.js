// 发布订阅模式
// on 方法订阅：将fn添加到缓存中
// off 方法取消订阅：将fn从缓存中删除
// emit 方法发布：依次执行缓存中的函数
class EventEmitter {
	constructor(value) {
		this.funcList = []
		this.value = value ?? {}
	}

	emit(params) {
		this.funcList.forEach(func => {
			func(params, this.value)
		})
	}

	on(func) {
		if (typeof func !== 'function') {
			throw new Error('func must be a function')
		} else {
			this.funcList.push(func)
		}
	}

	off(func) {
		if (typeof func !== 'function') {
			throw new Error('func must be a function')
		} else {
			const index = this.funcList.findIndex(item => item === func)
			this.funcList.splice(index, 1)
		}
	}
}

const numberCount = new EventEmitter({ count: 0 })
function a(params, value) {
	console.log('a', value.count, params)
}
numberCount.on(a)

numberCount.on(function b(params, value) {
	console.log('b', value.count, params)
})
numberCount.emit('first')
numberCount.off(a)
numberCount.emit('second')
