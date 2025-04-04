const fs = require('fs');

let a, b, c, ans;

function modulo(x) {
    return x % c;
}

function divide_and_conquer(n, k){
    let ret = 1n;

    while(k) {
        if(k % 2n){
            ret = modulo(modulo(ret) * modulo(n));
        }
        n = modulo(modulo(n) * modulo(n));
        k /= 2n;
    }

    return ret;
}

function main(){
    const input = fs.readFileSync(0).toString().trim().split(' ');

    a = BigInt(input[0]);
    b = BigInt(input[1]);
    c = BigInt(input[2]);

    ans = divide_and_conquer(a, b);

    console.log(ans.toString());
}

main();