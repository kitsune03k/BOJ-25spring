const fs = require('fs');

function main(){
    const input = fs.readFileSync(0).toString().trim().split('\n').slice(1);

    const pairs = input.map(line => line.split(' '));

    pairs.sort(function (a, b) {
        return Number(a[0]) - Number(b[0]); // 나이순으로만 정렬
    });

    let ans = '';
    for (x of pairs){
        ans += String(x[0]) + ' ' + String(x[1]) + '\n';
    }

    console.log(ans);
}

main();