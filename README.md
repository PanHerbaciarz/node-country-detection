# node-country-detection

### How to use
```javascript
// hook up a library
const ncd = require('./node-country-detection');
const http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    // use getCountry(req)
    // return ex. New Zealand
    // use getCurrency(req)
    // return ex. NZD
    res.write(ncd.getCountry(req) + ' ' + ncd.getCurrency(req));
    res.end();
}).listen(3000);

```

### License
```
MIT
```
