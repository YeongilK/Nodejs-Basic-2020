let persons = [
    {name: '홍길동', gender: '남자', age: 29},
    {name: '성춘향', gender: '여자', age: 17}
];

// 실제로는 이렇게 쓰는 경우가 더 많음
for (let person of persons) {
    console.log(person.name, person.gender, person.age);
}

console.log(persons[0], persons[0].name, persons[1].age);