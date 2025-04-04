const fs = require('fs');

let n, p, ans;

function main(){
    const input = fs.readFileSync(0).toString().trim().split(' ');

    n = Number(input[0]);
    p = Number(input[1]);
    ans = 1;

    for(let i = 1; i <= n; i++){
        ans *= i % p;
        ans %= p;
    }

    console.log(ans);
}

main();