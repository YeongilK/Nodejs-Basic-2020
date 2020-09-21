const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('점수 입력(0 ~ 100) > ');
rl.prompt();

rl.on('line', function(buf) {
    // 입력을 받아서 처리하는 로직
    let input = parseInt(buf);

    if (input >= 90 && input <= 100) {
        console.log(`성적 : ${input} / grade : A`);
    } else if (input >=80 && input < 90) {
        console.log(`성적 : ${input} / grade : B`);
    } else if (input >=70 && input < 80) {
        console.log(`성적 : ${input} / grade : C`);
    } else if (input >=60 && input < 70) {
        console.log(`성적 : ${input} / grade : D`);
    } else if (input >= 0 && input < 60) {
        console.log(`성적 : ${input} / grade : F`);
    } else {
        console.log(`성적 : ${input} / 잘못입력했습니다`);
    }

    // 끝날 때 반드시 처리해야함
    rl.close();
});