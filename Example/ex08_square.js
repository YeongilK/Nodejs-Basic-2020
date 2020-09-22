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
}

// 1부터 N까지 합의 제곱을 구하는 함수
function squareofSum(num) {

}


rl.setPrompt('양의 정수 입력 : > ');
rl.prompt();

rl.on('line', function(buf) {
    let N = parseInt(buf);



    rl.close();
});