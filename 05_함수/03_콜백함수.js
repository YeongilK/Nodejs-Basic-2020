// 매개 변수로 '함수' 가 전달됨

function callFiveTimes(callback) {
    for (let i=0; i<5; i++) {
        callback();
    }
}
callFiveTimes(function () {
    console.log('함수 호출');
});