var reverseWords1 = function (s) {
    s = s.trim().split(/\s+/)
    let l = 0, r = s.length -1 
    while (l < r) {
        const temp = s[l]
        s[l] = s[r].trim()
        s[r] = temp.trim()
        l ++ 
        r --
    }

    return s.join(' ')
};

const reverseWords = (s) =>{ 
    s = s.split('')    
    triming(s)
    reversing(s,0,s.length -1) 

    let start = 0
    for ( let i = 0 ; i < s.length ; i ++){
        if(s[i] === ' ' ){
            reversing(s,start,i-1)
            start = i + 1
        }
        else if ( i === s.length -1 ){
            reversing(s,start,i)
        }
    }
    return s.join('')
}

const reversing = (string,start,end) =>{
    while(start < end) {
        const temp = string[start]
        string[start] = string[end]
        string[end] = temp
        start ++ 
        end --
    }
}
const triming = (string) =>{
    let slow = 0,fast = 0  
    //如何删除多个连续的空格
    while(fast < string.length) {
        if(fast === 0 && string[fast] === ' '){
            while(string[fast] === ' '){
                fast ++ 
            }
            string[slow] = string[fast]
            slow ++ 
            fast++
        }
        else if ( fast === string.length -1 && string[fast] === ' '){
            break
        }
        else { 
            //删除连续空格
            if(string[fast] === ' ' && string [fast -1] === ' '){
                fast ++
        }
        else { 
            string[slow] = string[fast]
            slow ++ 
            fast ++ 
        }
    }
    }
    string.length =  string[slow -1] === ' ' ? slow -1 :  slow
}
console.log(reverseWords("  the sky  is blue  "))