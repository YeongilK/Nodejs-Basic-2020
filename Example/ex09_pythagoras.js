// 1 ~ N사이의 범위에서 a + b + c = 1000 인 피타고라스 수 구하기

function getPythaNum () {
    let a, b, c = 0;

    for (a=1; a<333; a++) {
        for (b=500; b>a; b--) {
            for (c=1; c<500; c++) {
                if (c*c === a*a + b*b && a + b + c === 1000) {
                    console.log(`a + b + c = 1000인 피타고라수 수는 a = ${a} / b = ${b} / c = ${c}`);
                }
            }
        }
    }
}

getPythaNum();