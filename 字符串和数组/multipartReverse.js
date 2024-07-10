const reversing = (string,start,end) =>{
    while(start < end) {
        const temp = string[start]
        string[start] = string[end]
        string[end] = temp
        start ++ 
        end --
    }
}
const multipartReverse = (s,n) =>{
    s = s.split('')
    //翻转整个
    reversing(s,0,s.length -1)
    //以n为边界翻转单词
    reversing(s,0,n-1)
    reversing(s,n,s.length-1)
    return s.join('')
}
console.log(multipartReverse("abcdefg",2))