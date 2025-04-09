const fs = require('fs');

function main() {
    const input = fs.readFileSync(0).toString().trim().split('\n');
    const n = BigInt(input[0]);

    let low = 0n;
    let high = 2n ** 64n;
    let mid = 0n;

    while(low <= high) {
        mid = (low + high) / 2n;

        if(mid ** 2n >= n){
            high = mid - 1n;
        } else {
            low = mid + 1n;
        }
    }

    console.log(String(low));
}

main();