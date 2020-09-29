const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const view = require('./view/index');
const template = require('./view/template');

http.createServer((req, res) => {
    let pathName = url.parse(req.url).pathname;
    let query = url.parse(req.url, true).query;
    console.log(pathName, query.id);

    switch(pathName) {
        case '/':
            if (query.id === undefined) {
                fs.readdir('data', function(error, filelist) {
                    let list = template.listGen(filelist);
                    let content = template.HOME_CONTENTS;
                    let control = template.buttonGen();
                    let html = view.index('Web 기술', list, content, control);
                    res.end(html);
                });
            } else {
                fs.readdir('data', function(error, filelist) {
                    let list = template.listGen(filelist);
                    let title = query.id;
                    let control = template.buttonGen(title);
                    let filename = `data/${title}.txt`;
                    fs.readFile(filename, 'utf8', (error, buffer) => {
                        let html = view.index(title, list, buffer, control);
                        res.end(html);
                    });
                });
            }
            break;
        default:
            res.writeHead(404);
            res.end();
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});