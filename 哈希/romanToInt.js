const romanToInt = s => {
	const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
	let sum = 0
	for (let i = 0; i < s.length; i++) {
		const current = roman[s[i]]
		const next = roman[s[i + 1]]
		if (next && current < next) {
			sum += next - current
			i++
		} else {
			sum += current
		}
	}
	return sum
}

// Test function
function testRomanToInt() {
	const testCases = [
		{ input: 'III', expected: 3 },
		{ input: 'IV', expected: 4 },
		{ input: 'IX', expected: 9 },
		{ input: 'LVIII', expected: 58 },
		{ input: 'MCMXCIV', expected: 1994 },
		{ input: 'I', expected: 1 },
		{ input: 'V', expected: 5 },
	]

	testCases.forEach(({ input, expected }) => {
		const result = romanToInt(input)
		console.assert(
			result === expected,
			`Test failed for input "${input}": expected ${expected}, got ${result}`
		)
		if (result === expected) {
			console.log(`Test passed for input "${input}": ${result}`)
		}
	})
}

// Run the test function
testRomanToInt()
