// 하루동안 디지털 시계에 3이 표시되는 시간을 초로 환산하는 프로그램

function totalSec() {
    let sum = 0;

    // 24시간
    for (let h=0; h<24; h++) {
        // 60분
        for (let m=0; m<60; m++) {
            if (h % 10 === 3 || parseInt(m / 10) === 3 || m % 10 === 3) {
                sum += 60;
            }
        }
    }
    return sum;
}

console.log(`하루동안 디지털시계에 3이 표시되는 시간 : ${totalSec()} [sec]`);