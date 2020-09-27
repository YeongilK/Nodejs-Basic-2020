// 여러개 파일 비동기적으로 읽기
const fs = require('fs');

// 순서 보장 안됨
fs.readFile('tmp/a.txt', 'utf8', function (e, bufA) {
    console.log(bufA);
});
fs.readFile('tmp/b.txt', 'utf8', function (e, bufB) {
    console.log(bufB);
});
fs.readFile('tmp/c.txt', 'utf8', function (e, bufC) {
    console.log(bufC);
});

// 순서 보장 방법
// 콜백 지옥
fs.readFile('tmp/a.txt', 'utf8', function (e, bufA) {
    fs.readFile('tmp/b.txt', 'utf8', function (e, bufB) {
        fs.readFile('tmp/c.txt', 'utf8', function (e, bufC) {
            console.log(bufA);
            console.log(bufB);
            console.log(bufC);
        });
    });
});