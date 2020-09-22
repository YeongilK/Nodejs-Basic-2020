//1부터 N까지 제곱의 합, 합의 제곱

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1부터 N까지 제곱의 합을 구하는 함수
function sumofSquare(num) {
    let sum = 0;
    for (let i=1; i<=num; i++) {
        sum += (i * i);
    }
    return sum;
}

// 1부터 N까지 합의 제곱을 구하는 함수
function squareofSum(num) {
    let sum = 0;
    for (let i=1; i<=num; i++) {
        sum += i;
    }
    return sum * sum;
}


rl.setPrompt('양의 정수 입력 : > ');
rl.prompt();

rl.on('line', function(buf) {
    let N = parseInt(buf);
    let result_sum = sumofSquare(N);
    let result_square = squareofSum(N);

    console.log(`입력 받은 정수 : ${N}
    1부터 N까지 제곱의 합 : ${result_sum}
    1부터 N까지 합의 제곱 : ${result_square}`);
    rl.close();
});