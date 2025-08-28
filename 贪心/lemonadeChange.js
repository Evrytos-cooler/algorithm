// 面额只有 5 10 20 ，柠檬水是 5 元
// 尽量让5保留的久一点，因为5是最万能的
// https://leetcode.cn/problems/lemonade-change/description/
const lemonadeChange = bills => {
	if (bills[0] !== 5) return false
	let map = new Map()
	map.set(5, 1)
	map.set(10, 0)
	map.set(20, 0)
	for (let i = 1; i < bills.length; i++) {
		const bill = bills[i]
		if (bill === 10) {
			// 只能找5块的
			if (map.get(5) >= 1) {
				map.set(5, map.get(5) - 1)
			} else {
				return false
			}
		} else if (bill === 20) {
			if (map.get(10) >= 1 && map.get(5) >= 1) {
				map.set(10, map.get(10) - 1)
				map.set(5, map.get(5) - 1)
			} else if (map.get(5) >= 3) {
				map.set(5, map.get(5) - 3)
			} else {
				return false
			}
		}
		map.set(bill, map.get(bill) + 1)
	}
	return true
}

const lemonadeChangeV2 = bills => {
	if (bills[0] !== 5) return false
	let change = {
		five: 0,
		ten: 0,
		twenty: 0,
	}

	// bills 是从小到大的
	for (let i = 0; i < bills.length; i++) {
		if (bills[i] === 5) {
			change.five++
			continue
		}

		if (bills[i] === 10) {
			if (change.five < 1) return false
			else {
				change.five--
				change.ten++
				continue
			}
		}

		if (bills[i] === 20) {
			if (change.ten >= 1 && change.five >= 1) {
				change.ten--
				change.five--
				change.twenty++
				continue
			}
			if (change.five >= 3) {
				change.five -= 3
				change.twenty++
				continue
			} else {
				return false
			}
		}
	}
	return true
}

console.log(lemonadeChange([5, 5, 10, 10, 20]))
console.log(lemonadeChange([5, 5, 5, 10, 20]))
console.log(lemonadeChangeV2([5, 5, 10, 10, 20]))
console.log(lemonadeChangeV2([5, 5, 5, 10, 20]))
