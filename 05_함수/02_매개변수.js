function print1(name, count) {
    console.log(`${name} 이/가 ${count}개 있습니다.`);
}
print1('사과', 10);
print1('사과');

// 매개 변수 초기화
function print2(name, count) {
    if (!count) {
        count = 1;
    }
    console.log(`${name} 이/가 ${count}개 있습니다.`);
}
print2('귤');

function print3(name, count) {
    count = count ? count : 1;

    console.log(`${name} 이/가 ${count}개 있습니다.`);
}
print3('감');

function print4(name, count) {
    count = count || 1;

    console.log(`${name} 이/가 ${count}개 있습니다.`);
}
print3('배');