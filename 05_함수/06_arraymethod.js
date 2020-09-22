// Array 생성
let cars = ['Audi', 'Volvo', 'BMW'];
let persons = new Array('John', 'Mary');    // Avoid new Array()
console.log(cars, persons);

console.log(cars.length, persons.length);   // Array에 몇 개의 element가 있는지
cars.sort();
console.log(cars);

// 맨 마지막 element
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length - 1]);

let html = "";
html += '<ul>\n';
for (let fruit of fruits) {
    html += '\t<li>' + fruit + '</li>\n'
}
html += '</ul>\n';
console.log(html);

fruits[fruits.length] = 'Cherry';
console.log(fruits.join(', '));             // Array를 string 형식으로 바꾸고 싶을때는 join 메소드

let item = fruits.pop();                    // 맨 끝 element 'Cherry' 제거
console.log(item, fruits);                  

fruits.push('Watermelon');                  // 맨 끝 element로 'Watermelon' 추가
console.log(fruits);

let shiftitem = fruits.shift();             // 처음 element 'banana' 제거
console.log(shiftitem, fruits);

fruits.unshift('Lemon');                    // 처음 element로 'Lemon' 추가
console.log(fruits);

delete fruits[0];                           // delete를 사용하면 정의되지 않은 구멍이 생긴다.
console.log(fruits);                        // pop() 이나 shift()를 사용하자

fruits = ["Banana", "Orange", "Apple", "Mango"];
let spliceitem = fruits.splice(2, 1);
console.log(spliceitem, fruits);

console.log(cars.concat(fruits));           // concat() : Merge Array

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3);            // fruits의 1번 인덱스부터 (3-1)번 인덱스까지 출력
console.log(citrus);

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.toString());

// sort(), reverse()
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();                              // 오름차순
console.log(fruits);
fruits.reverse();                           // 내림차순
console.log(fruits);

fruits.forEach(function (value, index) {
    console.log(index, value);
});