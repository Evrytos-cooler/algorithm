var compareVersion = function (version1, version2) {
	const v1 = version1.split('.')
	const v2 = version2.split('.')

	for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
		const target1 = parseInt(v1[i]) || 0
		const target2 = parseInt(v2[i]) || 0
		if (target1 > target2) return 1
		if (target1 < target2) return -1
	}
	return 0
}

console.log(compareVersion('1.01', '1.0001'))
