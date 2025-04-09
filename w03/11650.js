const fs = require('fs');

function main(){
    const input = fs.readFileSync(0).toString().trim().split('\n').slice(1);

    const pairs = input.map(line => line.split(' ').map(Number));

    pairs.sort(function (a, b) {
        if(a[0] !== b[0]){
            return a[0] - b[0];
        }

        return a[1] - b[1];
    });

    let ans = '';
    for (x of pairs){
        ans += String(x[0]) + ' ' + String(x[1]) + '\n';
    }

    console.log(ans);

}

main();