function sumDivisor(num) {
    let result = 0;
    for (let i=0; i<num; i++) {
        if (num % i === 0) {
            result += i;
        }
    }
    return result;
}
let array = [];
let n = 0;
for (let i=2; i<10000; i++) {
    n = sumDivisor(i);
    if (n === i) {
        array.push(i);
    }
}
console.log(`2 ~ 10000 까지의 수 중 완전수는 ${array} 입니다.`);