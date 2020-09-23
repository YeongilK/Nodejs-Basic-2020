let persons = [
    {name: '홍길동', gender: '남자', age: 29},
    {name: '성춘향', gender: '여자', age: 17}
];

// 외부로 내보내고 싶을 때
let externalForm = JSON.stringify(persons);
console.log(externalForm);

// 외부에서 받은걸 프로그램 안에서 이용할 때
let p = JSON.parse(externalForm);
for (let person of p) {
    console.log(person.name, person.gender, person.age);
}