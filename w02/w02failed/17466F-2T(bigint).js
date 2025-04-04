const fs = require('fs');

let n, p, ans;

function main(){
    const input = fs.readFileSync(0).toString().trim().split(' ');

    n = BigInt(input[0]);
    p = BigInt(input[1]);
    ans = 1n;

    for(let i = 1n; i <= n; i++){
        ans = ans * i % p;
    }

    console.log(ans.toString());
}

main();