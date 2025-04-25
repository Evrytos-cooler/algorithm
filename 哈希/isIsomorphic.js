const isIsomorphic = (s, t) => {
	const map = new Map()
	if (s.length !== t.length) return false
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			if (map.get(s[i]) !== t[i]) return false
		} else {
			if ([...map.values()].includes(t[i])) return false
			else map.set(s[i], t[i])
		}
	}
	return true
}
console.log(isIsomorphic('abab', 'cdcd'))
console.log(isIsomorphic('aaaa', 'bbbb'))
console.log(isIsomorphic('aaaa', 'aabb'))
