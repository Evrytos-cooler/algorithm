// 面额只有 5 10 20 ，柠檬水是 5 元
// 尽量让5保留的久一点，因为5是最万能的
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
console.log(lemonadeChange([5, 5, 10, 10, 20]))
console.log(lemonadeChange([5, 5, 5, 10, 20]))
