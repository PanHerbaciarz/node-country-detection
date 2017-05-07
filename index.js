const ncd = require('./node-country-detection');
const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write(ncd.getCountry(req) + ' ' + ncd.getCurrency(req));
    res.end();
}).listen(3000);
