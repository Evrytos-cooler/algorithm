//proimse同步
const syncPromise = async PromsieFuncList => {
	let temp
	for (let promise of PromsieFuncList) {
		temp = await promise(temp)
	}
	return temp
}

const testingSyncPromise = async () => {
	const promiseFuncList = [
		// 1. 1+1
		async () => {
			return 1 + 1
		},
		// 2. 2*2
		async result => {
			return result * 2
		},
		// 3. 4*4
		async result => {
			return result * 4
		},
	]
	const result = await syncPromise(promiseFuncList)
	console.log(result)
}

testingSyncPromise()
