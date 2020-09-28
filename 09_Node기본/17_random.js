//const myModule = require('./18_exports');
const myModule = require('./19_module');

for (let i=0; i<5; i++) {
    console.log(myModule.randInt(1, 5));
}
console.log();
for (let i=0; i<5; i++) {
    console.log(`Area: ${myModule.areaCircle(myModule.randInt(1, 5))}`);
}