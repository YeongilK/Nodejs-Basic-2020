const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('숫자 입력(0 ~ 99) : > ');
rl.prompt();

rl.on('line', function(buf) {
    let input = parseInt(buf);
    let num = input;
    let newNum = 0, cycle = 0;
    
    while (true) {
        cycle++;

        if (num < 10) {
            newNum = num % 10;
        } else {
            newNum = parseInt(num / 10) + (num % 10);
        }
        num = (num % 10).toString() + (newNum % 10).toString();
        num = parseInt(num);
        
        if (num === input) {
            break;
        } 
    }
    console.log(`${input}의 더하기 사이클은 ${cycle} 입니다.`);

    rl.close();
});