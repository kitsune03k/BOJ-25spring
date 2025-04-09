const fs = require('fs');

function main() {
    const input = fs.readFileSync(0).toString().trim().split('\n');

    let map = new Map();

    const arr = input[1].split(' ').map(Number);
    const find = input[3].split(' ').map(Number);

    const set = new Set(arr);

    let ans = '';
    for (x of find) {
        if (set.has(x)){
            ans += '1\n';
        }
        else {
            ans += '0\n';
        }
    }

    console.log(ans);
}

main();