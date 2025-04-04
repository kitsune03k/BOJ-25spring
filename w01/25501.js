const fs = require('fs');

let count;

function recursion(str, l, r) {
    ++count;

    if (Number(l) >= Number(r)) {
        return 1;
    } else if (str[l] !== str[r]) {
        return 0;
    } else {
        return recursion(str, l + 1, r - 1);
    }
}

function isPalindrome(str) {
    count = 0;

    return recursion(str, 0, str.length - 1);
}

function main() {
    let input = fs.readFileSync(0).toString().split('\n');
    let t = Number(input[0]);

    let ans = '';

    for (let i = 1; i <= t; i++) {
        ans += String(isPalindrome(input[i])) + ' ' + String(count) + '\n';
    }

    console.log(ans);
}

main();