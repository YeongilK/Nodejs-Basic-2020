// 사용자가 입력한 글을 받는 방법

const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('정수 입력 > ');
rl.prompt();

rl.on('line', function(buf) {
    // 입력을 받아서 처리하는 로직
    let input = parseInt(buf);

    if (input % 3 === 0) {
        console.log(`${input}은 3의 배수입니다.`);
    } else {
        console.log(`${input}은 3의 배수가 아닙니다.`);
    }
    // 끝날 때 반드시 처리해야함
    rl.close();
});