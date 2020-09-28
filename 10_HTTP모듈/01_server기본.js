const http = require('http');
const view = require('./view/01_first');

let server = http.createServer(function(request, response) {
    //console.log(request);
    let html = view.first();
    response.writeHead(200,                     // Status code, OK
        {'Content-Type': 'text/html'});         // Default값이니 생략가능
    response.end(html);
});

server.listen(3000);
// 웹 브라우저 주소창에 localhost:3000 입력