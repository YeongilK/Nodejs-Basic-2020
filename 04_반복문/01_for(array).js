let array = [52, 273.1, '아침밥', '점심밥', true, false];
console.log(array);
console.log();

// element 변경
array[0] = 0;

// element 추가
array[6] = 'new item';
array.push('push');

for (let i = 0; i < array.length; i++) {
    console.log(array[i], typeof(array[i]));
}
console.log();

// Enhanced for Loop
for (let item of array) {
    console.log(item, typeof(item));
}