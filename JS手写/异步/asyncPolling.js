// 考虑递归调用自己
async function asyncPollingV3(task, interval, conditionFn) {
	const temp = await task()
	const now = Date.now()
	while (Date.now() - now < interval) {}
	if (conditionFn(temp)) return temp
	else {
		return await asyncPollingV3(task, interval, conditionFn)
	}
}

async function asyncPolling(task, interval, conditionFn) {
	let temp
	while (true) {
		temp = await task()
		if (conditionFn(temp)) return temp
		await new Promise(resolve =>
			setTimeout(() => {
				resolve()
			}, interval)
		)
	}
}

// promise 写法
function asyncPollingV2(task, interval, conditionFn) {
	return new Promise((resolve, reject) => {
		const poll = () => {
			setTimeout(() => {
				task().then(res => {
					if (conditionFn(res)) resolve(res)
					else poll()
				})
			}, interval)
		}
		poll()
	})
}
// 示例用法
let count = 0
const task = () =>
	new Promise(resolve => {
		count++
		resolve(count)
	})
const conditionFn = result => result >= 3
asyncPollingV3(task, 1000, conditionFn).then(console.log) // 输出 3
