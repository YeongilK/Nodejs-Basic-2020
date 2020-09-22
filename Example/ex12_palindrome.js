// 세자리 수를 곱해 만들 수 있는 가장 큰 대칭수 구하기

function getPalindrome() {
    let maxNum = 0;
    
    for (let i=999; i>=100; i--) {
        for (let k=999; k>=100; k--) {
            let multi = i * k;
            // 문자열로 변환 후 뒤집어줌
            let revNum = multi.toString().split('').reverse().join('');
            // 최대값 찾는 과정
            if (multi == revNum) {
                if (maxNum < multi) {
                    maxNum = multi;
                }
            }
        }
    }
    return maxNum;
}
console.log(`가장 큰 대칭수 : ${getPalindrome()}`);