const fs = require('fs');

const LIM = 1000;

let prime_arr;

function setPrime() {
    prime_arr = new Array(LIM + 1).fill(true);

    prime_arr[0] = false;
    prime_arr[1] = false;

    for (let i = 2; i <= LIM; i++) {
        if (prime_arr[i]) {
            for (let j = i * 2; j <= LIM; j += i) {
                prime_arr[j] = false;
            }
        }
    }
}

function main() {
    setPrime();

    let input = fs.readFileSync(0).toString().trim().split('\n');
    let n = Number(input[0]);
    let arr = input[1].split(' ').map(Number);

    let ans = 0;
    for(x of arr){
        if(prime_arr[x]){
            ans++;
        }
    }

    console.log(ans);
}

main();