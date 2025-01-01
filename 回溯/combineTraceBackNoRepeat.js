const combinationSum = (targetArr, target) => {
	const result = [],
		temp = [],
		used = []

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
			if (targetArr[i] === targetArr[i - 1] && !used[i - 1]) continue
			temp.push(targetArr[i])
			//表示数组是否再上一次被用过了，如果被用过了，不能再同一层用，同一层里面的used[i]是true
			used[i] = true
			tarceback(i + 1, sum + targetArr[i])
			temp.pop()
			used[i] = false
		}
	}

	tarceback(0, 0)
	return result
}

combinationSum([10, 1, 2, 7, 6, 1, 5], 8)
