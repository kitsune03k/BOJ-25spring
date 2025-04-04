const fs = require('fs');
let input = fs.readFileSync(0).toString().split('\n');

let t = Number(input[0]);

let ans = '';

for(let i = 1; i <= t; i++) {
    let num = input[i].split(' ');
    ans += Number(num[0]) + Number(num[1]) + '\n';
}

console.log(ans);