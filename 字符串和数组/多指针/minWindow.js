// 最小覆盖子串
// 从 map 视角看，每次遇到都会记录
// 从 count 视角看，盈余的 char 不必记录
const minWindow = function (s, t) {
	if (t.length === 0 || s.length < t.length) return ''
	if (t.length === 1 && s.includes(t)) return t
	// 构建targetMap
	const targetMap = new Map()
	for (let char of t) {
		targetMap.set(char, targetMap.get(char) + 1 || 1)
	}

	let head = 0
	let tail = 0
	const map = new Map()
	// 找到第一个
	for (let i = 0; i < s.length; i++) {
		if (targetMap.has(s[i])) {
			map.set(s[i], 1)
			head = i
			tail = i + 1
			break
		}
	}
	if (map.size === 0) return ''
	let count = 1
	let min = null
	// 维护滑动窗口
	while (tail < s.length) {
		// 扩大区间
		while (count < t.length && tail < s.length) {
			if (targetMap.has(s[tail])) {
				if (targetMap.get(s[tail]) > (map.get(s[tail]) || 0)) count++
				map.set(s[tail], map.get(s[tail]) + 1 || 1)
			}
			tail++
		}

		// 缩小区间,需要找到下一个
		while (count >= t.length - 1 && head < s.length) {
			if (count === t.length) {
				min = !min || min.length > tail - head ? s.slice(head, tail) : min
			}
			if (targetMap.has(s[head]) && count < t.length) break
			if (targetMap.has(s[head])) {
				if (targetMap.get(s[head]) >= map.get(s[head])) count--
				map.set(s[head], map.get(s[head]) - 1)
			}
			head++
		}
	}
	return min
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
