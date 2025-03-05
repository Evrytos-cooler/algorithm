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

const now0 = Date.now()
console.log(await asyncSum(1, 1, 1, 1, 1, 1, 1))
console.log(Date.now() - now0)

// 由于加法是无序的，所以可以同时执行多个promise
// 使用递归，每次执行一轮，每一轮用两个数字计算，完成后再次执行一轮
// 当数组只有一个或者0个的时候就结束递归

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

const now = Date.now()
console.log(await concurrentAsyncSum(1, 1, 1, 1, 1, 1, 1))
console.log(Date.now() - now)

// 继续优化，这里使用了一个Promise.all() 如果在同一批次的计算中有一个计算结果非常就，就会拖累其他结果，导致整体并发靠后
// 我们在每一个Promise落定后去看当前temp中是否有内容，如果没有内容则跳过，因为每两个promise才回去执行下一个计算
// 如果当前temp有两个元素则继续执行递归内容
// 每一次落定都执行增加一个count，如果count达到了最终需要的计算次数，就返回
// 但是由于操作数组的问题，shift()的事件复杂度比较高，所以时间上不如第二个方法
// 而且还可能遇到 Process exited with code 13 的问题，不知道为什么

const perfConcurrentAsyncSum = async (...arr) => {
	return new Promise(allResolve => {
		if (!arr.length) return 0
		if (arr.length === 1) return arr[0]

		// 如果数组长度为奇数，添加一个 0
		if (arr.length % 2 === 1) {
			arr.push(0)
		}

		// 计算一共需要执行多少次
		let totalCount = 0
		let n = arr.length
		while (n > 1) {
			n /= 2
			totalCount += n
		}

		const sendPromise = () =>
			new Promise(resolve => {
				totalCount--
				asyncAdd(arr.pop(), arr.pop(), (_, sum) => {
					resolve(sum)
				})
			})
				.then(sum => {
					if (totalCount === 0) {
						allResolve(sum)
					} else {
						arr.unshift(sum)
						if (arr.length > 1) {
							// 继续执行
							sendPromise()
						}
					}
				})
				.catch(e => {
					console.log(e)
				})

		// 分成两两一组，计算每组的和
		const length = arr.length
		for (let i = 0; i < length; i += 2) {
			sendPromise()
		}
	})
}

const now2 = Date.now()
console.log(await perfConcurrentAsyncSum(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1))
console.log(Date.now() - now2)
