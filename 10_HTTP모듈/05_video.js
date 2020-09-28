const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('media/bear.mp4', (error, video) => {
        res.writeHead(200, {'Content-Type': 'video/mp4'})
        res.end(video);
    });
});

server.listen(3000);