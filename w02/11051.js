const fs = require('fs');

let n, r, ans;

let pascal = [];

function modulo(x){
    return x % 10007;
}

function ncr() {
    pascal[1][0] = 1;
    pascal[1][1] = 1;

    for(let i=2; i<=n; i++){
        for(let j=0; j<=i; j++){
            if (j === 0 || j === i){
                pascal[i][j] = 1;
            }
            else{
                pascal[i][j] = modulo(modulo(pascal[i-1][j-1]) + modulo(pascal[i-1][j]));
            }
        }
    }
}

function main(){
    const input = fs.readFileSync(0).toString().trim().split(' ');

    n = Number(input[0]);
    r = Number(input[1]);

    for(let x=0; x<=1000; x++){
        const subArr = new Array(x+1).fill(0);

        pascal.push(subArr);
    }

    ncr();

    console.log(pascal[n][r].toString());
}

main();