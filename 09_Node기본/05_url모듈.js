const url = require('url');

let urlSample = 'http://www.hanbit.co.kr/store/books/look.php?p_code=B4872223435';
const parseObject = url.parse(urlSample);
console.log(parseObject);
console.log(parseObject.query);

console.log(url.format(parseObject));