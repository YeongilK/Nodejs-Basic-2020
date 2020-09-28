console.time('alpha');

/* let output = 1;
for (let i=1; i<=10; i++) {
    output *= i;
} */
let sum = 0;
for (let i=1; i<=1e6; i++) {
    sum += i;
}
console.log(`Result: ${sum}`);

console.timeEnd('alpha');