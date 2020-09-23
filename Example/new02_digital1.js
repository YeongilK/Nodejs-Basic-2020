// 연습문제 - 4

// 0부터 9까지 갯수를 세어줄 Array
let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// 한자리수
for (let i=1; i<10; i++) {
    counts[i]++;
}
// 두자리수
for (let i=10; i<100; i++) {
    counts[parseInt(i / 10)]++;             // 십의 자릿수
    counts[i % 10]++;                       // 일의 자릿수
}
// 세자리수
for (let i=100; i<1000; i++) {
    counts[parseInt(i / 100)]++;            // 백의 자릿수
    counts[parseInt((i % 100) / 10)]++;     // 십의 자릿수
    counts[i % 10]++;                       // 일의 자릿수
}
// 네자리수
for (let i=1000; i<=1000; i++) {
    counts[parseInt(i / 1000)]++;           // 천의 자릿수
    counts[parseInt((i % 1000) / 100)]++;   // 백의 자릿수
    counts[parseInt((i % 100) / 10)]++;     // 십의 자릿수
    counts[parseInt(i % 10)]++;             // 일의 자릿수
}

console.log(counts);