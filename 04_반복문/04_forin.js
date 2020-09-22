let array = [10, 20, 30, 40, 50];

for (let i in array) {
    console.log(i, '-', array[i]);
}
console.log();

for (let element of array) {
    console.log(element);
}