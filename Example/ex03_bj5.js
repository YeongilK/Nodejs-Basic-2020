const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('시간 입력 > ');
rl.prompt();

rl.on('line', function(buf) {
    let time = buf.split(' ');
    hour = parseInt(time[0]);
    minute = parseInt(time[1]);

    if (hour === 0) {
        if(minute < 45) {
            hour = 23;
            minute += 15;
        } else {
            minute -= 45;
        }
    } else {
        if (minute < 45) {
            hour -= 1;
            minute += 15;
        } else {
            minute -= 45;
        }
    }
    console.log(`새로운 알람 시각 - ${hour}:${minute}`);

    rl.close();
});