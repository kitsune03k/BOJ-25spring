const fs = require('fs');

function main(){
    const input = fs.readFileSync(0).toString().trim().split('\n').map(Number).slice(1);

    input.sort(function (a, b) {
        return a - b;
    });

    let ans = '';
    for (x of input){
        ans += String(x) + '\n';
    }

    console.log(ans);
}

main();