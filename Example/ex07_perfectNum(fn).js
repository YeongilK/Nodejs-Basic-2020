// 완전수 구하기

// 약수 구하는 함수
function getDivisors(num) {
    let divArray = [];
    for (let i=1; i<num; i++) {
        if (num % i === 0) {
            divArray.push(i);
        }
    }
    return divArray;
}
// Array 원소의 합을 계산해주는 함수
function sumArray(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;
}

for (let i=2; i<=10000; i++){
    let array = getDivisors(i);
    let divSum = sumArray(array);

    if (i === divSum) {
        console.log(i, '\n', array);
    }
}