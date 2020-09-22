// 1 에서 어느 수 까지 더해야 100이 넘을까?
let sum = 0;
let number = 0;

while (true) {
    sum += number;
    if (sum >= 100) {
        break;
    }
    number++;
}
console.log(`1에서 ${number}까지 더하면 ${sum}이/가 되므로 100이 넘는다.`);

sum = 0;
for (let i = 1; i <= 14; i++) {
    sum += i;
}
console.log(sum);