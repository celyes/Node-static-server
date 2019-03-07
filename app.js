const fs = require('fs');
const http = require('http');
const url = require('url');
const routes = require('./routes');
let port = 3000;
function send404Response(response){
    response.writeHead(404, {"Content-Type": "text/html"});
    fs.createReadStream("404.html").pipe(response);
}
function hasStarted(port){
    console.info('Server started at http://localhost:' + port);
}
function onRequest(request, response){
    let q = url.parse(request.url, true);
    if(q.pathname in routes){
        console.log('requested url : ' + q.pathname);
        return routes[q.pathname](request, response);
    }
    send404Response(response);
}
http.createServer(onRequest).listen(port, hasStarted(port));