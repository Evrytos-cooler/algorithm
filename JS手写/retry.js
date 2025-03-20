function retry(fn, retries, delay) {
	// 实现代码
	let timer
	const timeoutPromise = new Promise((_, r) => {
		timer = setTimeout(() => {
			r('timeout')
		}, delay)
	})

	let count = retries
	const tryFunc = async () => {
		try {
			const result = await fn()
			clearTimeout(timer)
			return result
		} catch (e) {
			if (count > 0 && timer) {
				count--
				return tryFunc()
			} else {
				clearTimeout(timer)
				throw e
			}
		}
	}
	return Promise.race([tryFunc(), timeoutPromise])
}

// 示例用法
const fetchData = () =>
	new Promise((resolve, reject) => {
		const success = Math.random() > 0.5
		setTimeout(() => (success ? resolve('Data') : reject('Error')), 1000)
	})

retry(fetchData, 3, 2000).then(console.log).catch(console.error)
