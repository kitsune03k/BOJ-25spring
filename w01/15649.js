const fs = require('fs');

let ans = '';
let n, m; // n개에서 길이 m만큼

let comb = [];
let chk = [];

function recursion(){
    if(comb.length == m) {
        ans += comb.join(' ') + '\n';
    }
    else {
        for(let i=1; i<=n; i++) {
            if(chk[i] === false) {
                chk[i] = true;
                comb.push(i);

                recursion();

                chk[i] = false;
                comb.pop();
            }
        }
    }
}

function main() {
    let input = fs.readFileSync(0).toString().split(' ');
    n = Number(input[0]);
    m = Number(input[1]);

    for(let i=0; i<=n; i++){
        chk.push(false);
    }

    recursion();

    console.log(ans);
}

main();