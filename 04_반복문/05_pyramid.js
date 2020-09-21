let star1 = '';
let star2 = '';

for (let i = 0; i < 5; i++) {
    for (let k = 0; k < i + 1; k++) {
        star1 += '*';
    }
    star1 += '\n'
}
console.log(star1);

for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 5 - i; k++) {
        star2 += ' ';
    }
    for (let k = 0; k < i + 1; k++) {
        star2 += '*'
    }
    star2 += '\n'
}
console.log(star2);