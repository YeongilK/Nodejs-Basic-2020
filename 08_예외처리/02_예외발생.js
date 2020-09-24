// 함수 선언
function callThreeTimes(callback) {
    for (let i=0; i<3; i++) {
        callback();
    }
}

// 정상 실행
callThreeTimes(function() {
    console.log('호출!');
});

//예외 발생
callThreeTimes();