//n个数的全排列
const fullArrange = arr => {
	const result = []
	const temp = []
	//确定参数
	const traceBack = targetArr => {
		//退出条件
		if (targetArr.length === 0) {
			result.push(temp.slice())
		}
		//确定循环
		for (let i = 0; i < targetArr.length; i++) {
			//由于这里传的是引用，所以一定要复制，否则拿不回arr[i]，也可以只复制一个元素
			const tempArr = targetArr.slice()
			tempArr.splice(i, 1)
			temp.push(targetArr[i])
			traceBack(tempArr)
			tempArr.splice(i, 0, arr[i])
			temp.pop()
		}
	}
	traceBack(arr)
	return result
}

console.log(fullArrange([1, 2, 3]))
