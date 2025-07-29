var nextPermutation = function (nums) {
	//找到替换位置
	let i = nums.length - 1
	while (i > 0) {
		if (nums[i] > nums[i - 1]) break
		i--
	}
	if (i === 0) return nums.reverse()
	let splitIndex = i - 1
	i = nums.length - 1
	//找到替换数
	while (i > splitIndex) {
		if (nums[i] > nums[splitIndex]) {
			;[nums[i], nums[splitIndex]] = [nums[splitIndex], nums[i]]
			break
		}
		i--
	}
	//将后面的序列逆序
	let start = splitIndex + 1
	let end = nums.length - 1
	while (start < end) {
		;[nums[start], nums[end]] = [nums[end], nums[start]]
		start++
		end--
	}

	return nums
}
console.log(nextPermutation([1, 3, 2]))

// 1. 比如有数字 1345651
// 2. 我们要找最小的下一个更大的，所以我们尽可能靠小的位数找
// 3. 看 51 ，他是递减的，所以一定是最大的排列了，不行， 651 同理，不行，5651 可以，因为她不是递减的，可以排出至少一个更大的
// 4. 所以我们得到 step1 = 从后向前，找到第一个递增的数，重拍后面的内容
// 5. 因为我们要尽可能小，所以我们在这里面找一个比当前首位大的最小的一个这里是 6
// 6. 6 替换到首位，那么剩下的数字按照递增的顺序排列，能够保证他是最小的
// 7. 这里按照递增排序也不需要主动排序，替换后他一定是递减的，将它逆序就行

var nextPermutation = function (nums) {
	// 1 从后向前找到第一个递增的
	let i = nums.length - 1
	while (i > 0) {
		if (nums[i] > nums[i - 1]) break
		i--
	}
	// 说明他整一个都是最大的了
	if (i === 0) return nums.reverse()
	// 2 在区间内找一个最小的大于首部的(其实就是第一个)
	let splitIndex = i - 1
	i = nums.length - 1
	while (i > splitIndex) {
		if (nums[i] > nums[splitIndex]) {
			;[nums[i], nums[splitIndex]] = [nums[splitIndex], nums[i]]
			break
		}
		i--
	}
	// 3 逆序后面的
	let s = splitIndex + 1
	let e = nums.length - 1
	while (s < e) {
		;[nums[s], nums[e]] = [nums[e], nums[s]]
		s++
		e--
	}
	return nums
}
console.log(nextPermutation([1, 3, 2]))
