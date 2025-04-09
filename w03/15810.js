const fs = require('fs');

function main() {
    const input = fs.readFileSync(0).toString().trim().split('\n');

    const [people, balloons] = input[0].split(' ');
    const times = input[1].split(' ').map(Number);
    times.sort((a, b) => {
        return a - b;
    });

    // low, high, mid는 시간
    let low = 0;
    let high = 100000000000;
    let mid = 0;

    let ans = 0, sum = 0;
    while (low <= high) {
        sum = 0;
        mid = Math.floor((low + high) / 2);

        for (x of times) {
            // 풍선갯수 += 총 주어진 시간 / 각 풍선 만들어내는 시간
            sum += Math.floor(mid / x);
        }

        // 만들어진 풍선 갯수가 balloons보다
        if (sum >= balloons) { // 크면
            ans = mid;
            high = mid - 1; // high 내림
        } else { // 작으면
            low = mid + 1; // low 올림
        }

        //console.log(`low: ${low}, high: ${high}`);
    }

    console.log(String(ans));
}

main();