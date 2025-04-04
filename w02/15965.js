const fs = require('fs');

// 문제에서 메모리가 256mb까지 사용 가능하다길래, 넉넉히 잡고 풀 것임
const LIM = 10000000; // bool 기준 5mb

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

function getPrime(x) {
    let idx = 0;

    for (let i = 2; i <= LIM; i++) {
        if (prime_arr[i]) {
            idx++;

            if (idx === x) {
                return i;
            }
        }
    }
}

function main() {
    setPrime();

    let input = fs.readFileSync(0).toString();

    let k = Number(input);
    let ans = getPrime(k);

    console.log(ans.toString());
}

main();