// 재귀적 호출 (Recursive call)

// Factorial
function facto(n) {
    if (n === 0) {
        return 1;
    }
    return n * facto(n-1);
}
console.log(facto(5));

// Fibonacci
function fibo(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibo(n-1) + fibo(n-2);
}
for (let i=1; i<=10; i++) {
    console.log(`Fibonacci(${i}) = ${fibo(i)}`);
}