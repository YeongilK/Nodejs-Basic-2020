// 연습문제 - 4

// 0부터 9까지 갯수를 세어줄 Array
let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let N = 1000;

for (let i=1; i<=N; i++) {
    let numToStr = String(i);
    for (let digit of numToStr) {
        counts[parseInt(digit)]++;
    }
}
console.log(counts);