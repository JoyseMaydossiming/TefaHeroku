const http = require('http');
const port = process.env.PORT || 9000;

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('{ "success":true, "data":"Index", "message":"AshiapSantuy", "code":200 }')
}).listen(port);