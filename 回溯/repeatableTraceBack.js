const combinationSum = (targetArr, target) => {
	const result = [],
		temp = []

	targetArr.sort((a, b) => a - b)
	//目标数组，开始索引，当前数组，当前和，目标和
	const tarceback = (startIndex, sum) => {
		//退出条件
		if (sum === target) {
			result.push(temp.slice())
			return
		}
		//循环逻辑 有借有还
		//左闭右开
		for (let i = startIndex; i < targetArr.length; i++) {
			if (targetArr[i] > target - sum) return
			temp.push(targetArr[i])
			tarceback(i, sum + targetArr[i])
			temp.pop()
		}
	}

	tarceback(0, 0)
	return result
}

combinationSum([2, 3, 6, 7], 7)
