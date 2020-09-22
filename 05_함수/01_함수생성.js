// 익명(Anonymous) 함수
let fn = function() {
    console.log('익명함수를 변수 fn이 참조');
}
fn();
console.log(fn);

// 선언적 함수
function funcName() {
    console.log('함수 이름을 갖는 함수');
}
funcName();
console.log(funcName);

// 화살표 함수
let arrowFunc = () => {
    console.log('화살표 함수');
}
arrowFunc();
console.log(arrowFunc);

// 매개 변수가 하나일 때는 괄호를 생략해도 된다.
let power1 = (x) => {
    return x*x;
}
let power2 = x => x*x
console.log(power1(10));
console.log(power2(20));