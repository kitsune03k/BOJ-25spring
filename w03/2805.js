const fs = require('fs');

function main() {
    const input = fs.readFileSync(0).toString().trim().split('\n');

    const [tnum, length] = input[0].split(' ').map(BigInt);
    const trees = input[1].split(' ').map(BigInt);
    trees.sort((a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });

    let low = 0n;
    let high = BigInt(trees[tnum - 1n]);
    let ans = 0n;

    let sumb = 0n, cut = 0n;
    while (low <= high) {
        sum = 0n;
        cut = (low + high) / 2n;

        for (let i = 0; i < tnum; i++) {
            // 각 나무에 대해 자를 수 있으면
            if (trees[i] - cut > 0n) {
                sum += trees[i] - cut;
            }
        }

        // 잘라낸 길이가 length보다
        if (sum >= length) { // 크면
            ans = cut;
            low = cut + 1n; // low 올림
        } else { // 작으면
            high = cut - 1n; // high 내림
        }
    }

    console.log(String(ans));
}

main();