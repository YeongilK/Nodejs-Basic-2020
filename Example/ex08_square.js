//1부터 N까지 제곱의 합, 합의 제곱 구하기

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1부터 N까지 '제곱의 합' 을 구하는 함수
function sumofSquare(num) {
    let sum = 0;
    for (let i=1; i<=num; i++) {
        sum += (i * i);
    }
    return sum;
}

// 1부터 N까지 '합의 제곱' 을 구하는 함수
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

    console.log(`
    입력 받은 정수 : ${N}
    1부터 N까지 제곱의 합 : ${sumofSquare(N)}
    1부터 N까지 합의 제곱 : ${squareofSum(N)}`);
    rl.close();
});