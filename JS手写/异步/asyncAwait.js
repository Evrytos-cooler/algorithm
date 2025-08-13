// 使用生成器 + Promise 实现 async await 机制
// async将函数转换成promise，生成器done的时候落定
// yield内部scheduler自动调用next流程(迭代)
// 也就是说 await async 和 生成器的区别就是 1 只能用于promise，2 会自动执行next

const myAsync = function (callback) {
	return new Promise((resolve, reject) => {
		const generatorFunc = callback()
		const scheduler = function (result) {
			try {
				if (result.done) resolve(result.value)
				else {
					result.value
						.then(res => scheduler(generatorFunc.next(res)))
						.catch(res => scheduler(generatorFunc.throw(res)))
				}
			} catch (e) {
				reject(e)
			}
		}
		scheduler(generatorFunc.next())
	})
}

function* func() {
	yield new Promise(resolve => {
		setTimeout(() => {
			console.log(1)
			resolve()
		}, 1000)
	})
	yield new Promise(resolve => {
		setTimeout(() => {
			console.log(2)
			resolve()
		}, 1000)
	})

	yield new Promise(resolve => {
		setTimeout(() => {
			console.log(3)
			resolve()
		}, 1000)
	})
}

myAsync(func)
