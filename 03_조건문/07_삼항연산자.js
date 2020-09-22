let number = 5;

let iseven = (5 % 2 === 0) ? true : false;
console.log(iseven);

let x = 5, y = 20;
let isdivisor = (y % x === 0) ? 'x는 y의 약수' : 'x는 y의 약수가 아님';
console.log(isdivisor);

let test;
test = test ? test : '초기화 1';        // undefind 는 false
test = test ? test : '초기화 2';
console.log(test);