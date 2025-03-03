let Trie = function () {
	this.isEnd = false
	this.children = {}
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (words) {
	let node = this
	for (let word of words) {
		if (!node.children[word]) {
			node.children[word] = new Trie()
		}
		node = node.children[word]
	}
	node.isEnd = true
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (words) {
	let node = this
	for (let word of words) {
		if (!node.children[word]) {
			return false
		}
		node = node.children[word]
	}
	return node.isEnd
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (words) {
	let node = this
	for (let i = 0; i < words.length; i++) {
		if (!node.children[words[i]]) {
			return false
		}
		node = node.children[words[i]]
	}
	return true
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie()
console.log(trie.insert('apple'))
console.log(trie.search('apple'))
console.log(trie.search('app'))
console.log(trie.startsWith('app'))
console.log(trie.insert('app'))
console.log(trie.search('app'))
