try {
    error.error.error();                // try {error가 의심되는 문장}
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}

console.log('프로그램 정상 종료');