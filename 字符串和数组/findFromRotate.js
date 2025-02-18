// 33. 搜索旋转排序数组
// 是一个变形的二分查找
// 注意边界条件
// 左闭右闭
const findFromRotate = (arr, target) => {
	let left = 0
	let right = arr.length - 1
	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		//达到结果
		if (arr[mid] === target) return mid
		//左侧单调区间
		if (arr[mid] >= arr[left]) {
			//稳定区间
			if (target < arr[mid] && target >= arr[left]) {
				right = mid - 1
			}
			//不稳定区间
			else {
				left = mid + 1
			}
		}
		//右侧单调区间
		else {
			//稳定区间
			if (target > arr[mid] && target <= arr[right]) {
				left = mid + 1
			}
			//不稳定区间
			else {
				right = mid - 1
			}
		}
	}
	return -1
}
console.log(findFromRotate([4, 5, 6, 7, 0, 1, 2], 0))
console.log(findFromRotate([4, 5, 6, 7, 0, 1, 2], 3))
