// String Length - 속성
let hello = '안녕하세요?';
console.log(hello, hello.length);

// String 내에서 문자열을 찾을 때
console.log(hello.indexOf('하'));
console.log(hello.indexOf('한'));           // 없는 문자열을 찾으면 -1 출력

let str1 = 'Please locate where "locate" occurs!';
console.log(str1.lastIndexOf("locate"));    // 가장 뒤에 있는 문자열을 찾고싶을 때

console.log(str1.search('locate'));

// 문자열의 일부분을 추출
let str2 = "Apple, Banana, Kiwi";
console.log(str2.slice(7, 13));             // 인덱스7 ~ 인덱스12 까지의 문자열 출력
console.log(str2.slice(-4));                // 뒤에서 4번째 인덱스부터 끝까지 출력

console.log(str2.substr(7, 6));             // 인덱스7에서부터 6글자를 출력

// 문자열을 대체
let newStr = str2.replace(',', ':');
// console.log(newStr);
newStr = str2.replace(/,/g, ':');           // Regular Expression(정규 표현식)
console.log(newStr);

// 공백 제거
let str3 = '     Hello World!     ';
console.log(str3);
console.log(str3.trim());

// 문자 추출
console.log(hello.charAt(2), hello[2]);
console.log(hello.charCodeAt(3));

// 문자열을 Array로 변경
let txt1 = "a,b,c,d,e"
console.log(txt1.split(','));
let txt2 = "a b c d e"
console.log(txt2.split(' '));