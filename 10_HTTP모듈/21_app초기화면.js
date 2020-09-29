const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const view = require('./view/index');

http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    switch(pathName) {
        case '/':
            fs.readdir('data', function(error, filelist) {
                let list = '';
                for (let file of filelist) {
                    // 끝에서 4번째인덱스까지를 제외하고 filename에 입력
                    let filename = file.substring(0, file.length-4);                
                    list += `<li><a href="/?id=${filename}">${filename}</a></li>`;
                }
                let html = view.index(list);
                res.end(html);
            });
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});