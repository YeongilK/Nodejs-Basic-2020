let date = new Date();
console.log(`현재 시간은 ${date} 입니다.`);

let unixDate = new Date(1600000000000);
console.log(`unixDate 시간은 ${unixDate} 입니다`);

//let strDate = new Date("Sun Sep 13 2020 21:26:40");
let strDate = new Date("2020-9-23 14:50")
console.log(`문자열로 만든 시간은 ${strDate} 입니다.`);

// 월은 0부터 시작이므로 9월을 표시하고 싶으면 '9-1' 을 입력한다
let eleDate = new Date(2020, 9-1, 23, 14, 50);     
console.log(`요소로 만든 시간은 ${eleDate} 입니다.`);