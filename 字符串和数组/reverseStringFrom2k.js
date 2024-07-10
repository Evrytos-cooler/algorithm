/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split('')
    if (k === 0 || s.length < 1) return s
    let left = 0, right = 2 * k - 1
    while (right < s.length) {
        //执行反转
        let i = left, j = left + k - 1 
        while (i < j) {
            const temp = s[i]
            s[i] = s[j]
            s[j] = temp
            i++
            j--
        }
        //移动2k
        right += 2 * k
        left += 2 * k
    }

    let i = left, j = Math.min(left + k -1 , s.length - 1)
    while (i < j) {
        const temp = s[i]
        s[i] = s[j]
        s[j] = temp
        i++
        j--
    }

    return s.join('')
};

//简化版

const reverseStr2 = (s,k)=>{
    s = s.split('')
    if (k === 0 || s.length < 1) return s
    let left = 0, right = 2 * k - 1

    while (left < s.length) {
        //执行反转
        let i = left,j = Math.min(left + k -1 , s.length - 1) 
        while (i < j) {
            const temp = s[i]
            s[i] = s[j]
            s[j] = temp
            i++
            j--
        }
        //移动2k
        right += 2 * k
        left += 2 * k
    }

    return s.join('')
}
console.log(reverseStr2("abcdefg", 2))