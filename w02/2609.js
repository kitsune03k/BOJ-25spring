const fs = require('fs');

function getGcd(x, y) {
    let a, b, quotient, remainder = 99999;

    if (x > y) {
        a = x;
        b = y;
    } else {
        a = y;
        b = x;
    }

    while (remainder) {
        remainder = a % b;

        a = b;
        b = remainder;
    }

    return a;
}

function getLcm(xy, gcd) {
    return xy / gcd;
}

function main() {
    const input = fs.readFileSync(0).toString().trim().split(' ');
    const num1 = Number(input[0]);
    const num2 = Number(input[1]);

    const g = getGcd(num1, num2);
    const l = getLcm(num1 * num2, g);

    ans = g.toString() + '\n' + l.toString();
    console.log(ans);
}

main();