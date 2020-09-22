// 1에서 1000까지의 각 숫자의 개수

function getCount(N) {
    let count = 0;
    for (let i=1; i<=1000; i++) {
        // 1 ~ 9 (한 자리수)
        if (i < 10) {
            if (N === i) {
                count++;
            }
            // 10 ~ 99(두 자리수)
        } else if (i >= 10 && i < 100) {
            if (N === parseInt(i / 10)) {
                count ++;
            }
            if (N === (i % 10)) {
                count ++;
            }
            // 100 ~ 999(세 자리수)
        } else if (i >= 100 && i < 1000) {
            if (N === parseInt(i / 100)) {
                count ++;
            }
            if (N === parseInt((i % 100) / 10)) {
                count ++;
            }
            if (N === (i % 10)) {
                count ++;
            }
            // 1000일 때
        } else {
            if (N === 0) {
                count ++;
            }
            if (N === 1) {
                count ++;
            }
        }
    }
    return count;
}

console.log(`***** 1부터 1000까지의 각 숫자의 개수 *****
0의 개수 : ${getCount(0)}
1의 개수 : ${getCount(1)}
2의 개수 : ${getCount(2)}
3의 개수 : ${getCount(3)}
4의 개수 : ${getCount(4)}
5의 개수 : ${getCount(5)}
6의 개수 : ${getCount(6)}
7의 개수 : ${getCount(7)}
8의 개수 : ${getCount(8)}
9의 개수 : ${getCount(9)}`);