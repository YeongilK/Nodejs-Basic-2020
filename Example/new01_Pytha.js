// 연습문제 - 2

let a, b, c;
let outerBreak = false;

for (a=1; a<333; a++) {
    for (b=a+1; b<500; b++){
        c = 1000 - a - b;
        if (c > (a + b)) {
            continue;
        }
        if (c*c === a*a + b*b) {
            console.log(`a = ${a} / b = ${b} / c = ${c}`);
            console.log(a*a, b*b, c*c);
            outerBreak = true;
            break;
        }
    }
    if (outerBreak) {
        break;
    }
}