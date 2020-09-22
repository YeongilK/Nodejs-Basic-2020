// 타이머 함수

let today = new Date();
console.log(today);

setTimeout(function () {
    console.log('3초 경과');
}, 3000);

let si = setInterval(() => {
    console.log(new Date());
}, 1000);

setTimeout(function () {
    console.log('5초 경과 : 종료 !!');
    clearInterval(si);
}, 5000);