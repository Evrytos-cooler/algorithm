/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    if (strs.length === 1) return strs[0];
    
    let i = 0;
    let result = '';
    
    while (i < Math.min(...strs.map(str => str.length))) {
        const currentChar = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                return result;
            }
        }
        result += currentChar;
        i++;
    }
    return result;
};

// 测试用例
console.log('测试用例 1 - 基本测试：');
console.log('输入:', ['flower', 'flow', 'flight']);
console.log('输出:', longestCommonPrefix(['flower', 'flow', 'flight'])); // 预期输出: "fl"

console.log('\n测试用例 2 - 无共同前缀：');
console.log('输入:', ['dog', 'racecar', 'car']);
console.log('输出:', longestCommonPrefix(['dog', 'racecar', 'car'])); // 预期输出: ""

console.log('\n测试用例 3 - 空数组：');
console.log('输入:', []);
console.log('输出:', longestCommonPrefix([])); // 预期输出: ""

console.log('\n测试用例 4 - 单个字符串：');
console.log('输入:', ['hello']);
console.log('输出:', longestCommonPrefix(['hello'])); // 预期输出: "hello"

console.log('\n测试用例 5 - 完全相同字符串：');
console.log('输入:', ['test', 'test', 'test']);
console.log('输出:', longestCommonPrefix(['test', 'test', 'test'])); // 预期输出: "test"

console.log('\n测试用例 6 - 包含空字符串：');
console.log('输入:', ['', 'test', 'test']);
console.log('输出:', longestCommonPrefix(['', 'test', 'test'])); // 预期输出: ""