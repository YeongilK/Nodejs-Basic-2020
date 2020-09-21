const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('연도 입력(1 ~ 4000) : > ');
rl.prompt();

rl.on('line', function(buf) {
    let year = parseInt(buf);

    if (year % 4 !== 0) {
        console.log('0');
    } else {
        if (year % 100 !== 0) {
            console.log('1');
        } else {
            if (year % 400 !== 0) {
                console.log('0');
            } else {
                console.log('1');
            }
        }
    }
    rl.close();
});