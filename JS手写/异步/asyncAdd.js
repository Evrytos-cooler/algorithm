// 只能用这个AsyncAdd
const asyncAdd = (a, b, cb) => {
	setTimeout(() => {
		cb(null, a + b)
	}, 1000 * Math.random())
}

// 同步做法
const asyncSum = async (...arr) => {
	const add = (a, b) => {
		return new Promise(r => {
			asyncAdd(a, b, (_, sum) => {
				r(sum)
			})
		})
	}

	let temp = 0
	for (let i = 0; i < arr.length; i++) {
		temp = await add(arr[i], temp)
	}

	return temp
}

// const now0 = Date.now()
// console.log(await asyncSum(1, 1, 1, 1, 1, 1, 1))
// console.log(Date.now() - now0)

// 由于加法是无序的，所以可以同时执行多个promise
// 使用递归，每次执行一轮，每一轮用两个数字计算，完成后再次执行一轮
// 当数组只有一个或者0个的时候就结束递归

// 还可以更加转牛角尖一点，组 resolve 都处理，但是代码上比较复杂。

const concurrentAsyncSum = async (...arr) => {
	if (!arr.length) return 0
	if (arr.length === 1) return arr[0]

	// 如果数组长度为奇数，添加一个 0
	if (arr.length % 2 === 1) {
		arr.push(0)
	}

	// 分成两两一组，计算每组的和
	const promises = []
	for (let i = 0; i < arr.length; i += 2) {
		promises.push(
			new Promise(resolve => {
				asyncAdd(arr[i], arr[i + 1], (_, sum) => {
					resolve(sum)
				})
			})
		)
	}

	// 等待所有异步加法完成
	const results = await Promise.all(promises)

	// 递归处理结果
	return concurrentAsyncSum(...results)
}
