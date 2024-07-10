const replaceNum = (s) =>{
    s = s.split(/[0-9]/g)
    return s.join('number')
}
// console.log(replaceNum('a1b2c3'))

//acm type
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function main() {
    const num0 = "0".charCodeAt();
    const num9 = "9".charCodeAt();
    const a = "a".charCodeAt();
    const z = "z".charCodeAt();
    function isAZ(str) {
        return str >= a && str <= z;
    }
    function isNumber(str) {
        return str >= num0 && str <= num9;
    }
    rl.on("line", (input) => {
        let n = 0;
        for (let i = 0; i < input.length; i++) {
            const val = input[i].charCodeAt();
            if (isNumber(val)) {
                n+= 6;
            }
            if (isAZ(val)) {
                n++;
            }
        }
        const ans = new Array(n).fill(0);
        let index = input.length - 1;
        for (let i = n - 1; i >= 0; i--) {
            const val = input[index].charCodeAt();
            if (isAZ(val)) {
                ans[i] = input[index];
            }
            if (isNumber(val)) {
                ans[i] = "r";
                ans[i - 1] = "e";
                ans[i - 2] = "b";
                ans[i - 3] = "m";
                ans[i - 4] = "u";
                ans[i - 5] = "n";
                i -= 5;
            }
            index--;
        }
        console.log(ans.join(""));
    })
}

main();