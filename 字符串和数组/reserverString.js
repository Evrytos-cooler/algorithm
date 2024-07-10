/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if(k === 0 || s.length < 1 ) return s 
    let left = 0,right = 2*k - 1 
    while(right < s.length ){
        //执行反转
        let i = left ,j = right
        while(i < j ) { 
            const temp = s[i]
            s[i] = s[j]
            s[j] = temp
            i ++ 
            j -- 
        }
        //移动2k
        right += 2*k
        left += 2*k 
    }
    right -= k 
    if(right  < s.length ) {
        while(left < right) {
            const temp = s[left]
            s[left] = s[right]
            s[right] = temp
            left ++ 
            right --
            }
    }else{
        right = s.length -1 
        while (left < right ){
            s[left] = s[right]
            s[right] = temp
            left ++ 
            right --   
        }
    }
    return s 
};
console.log(reverseStr(["h","e","l","l","o",'a','b','c'],2))