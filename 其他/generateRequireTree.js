const nodes = {
	// return ["F.js","E.js","D.js","C.js","B.js","A.js","page.js"])
	name: 'page.js',
	require: [
		{
			name: 'A.js',
			require: [{ name: 'C.js', require: [{ name: 'F.js' }] }],
		},
		{
			name: 'B.js',
			require: [
				{
					name: 'D.js',
					require: [{ name: 'F.js' }],
				},
				{
					name: 'E.js',
					require: [],
				},
			],
		},
	],
}

const genRequireTree = node => {
	const stack = []

	const traversal = require => {
		if (require) {
			require.forEach(r => {
				stack.push(r.name)
				r.require && traversal(r.require)
			})
		}
	}
	traversal([node])
	return [...new Set(stack.reverse())]
}

// eg
console.log(genRequireTree(nodes))
