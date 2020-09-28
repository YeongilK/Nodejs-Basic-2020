const http = require('http');
const url = require('url');

http.createServer(function(req, res) {
    let query = url.parse(req.url, true).query;
    console.log(query.name, query.region);

    // GET 파라메터 출력, localhost:3000?name=KIM&region=Seoul
    //res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>${JSON.stringify(query)}</h1>`);
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});