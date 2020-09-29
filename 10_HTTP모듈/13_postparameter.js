const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    
    if(pathName === '/') {
        fs.readFile('view/13_form.html', 'utf8', (error, html) => {
            res.end(html);
        });
    } else if(pathName === '/proc') {
        let body = '';
        req.on('data', function(data) {
            body += data;
        });
        req.on('end', function() {
            let param = qs.parse(body);
            console.log(param);
            console.log(param.uid, param.pwd);
            res.end(`<h1>${JSON.stringify(param)}</h1>`);
        });
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});