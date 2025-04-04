const fs = require('fs');

let n, r, ans;

function ncr() {
    let k = r < n - r ? r : n - r;
    let ret = 1n;

    let bunmo = n;
    let bunja = 1n;

    while(k){
        ret *= bunmo;
        ret /= bunja;

        bunmo--;
        bunja++;

        k -= 1n;
    }

    return ret % 10007n;
}

function main() {
    const input = fs.readFileSync(0).toString().trim().split(' ');

    n = BigInt(input[0]);
    r = BigInt(input[1]);

    ans = ncr();

    console.log(ans.toString());
}

main();