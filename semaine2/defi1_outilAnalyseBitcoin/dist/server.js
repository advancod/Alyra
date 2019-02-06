var http = require("http");
var sys = require('sys')
var exec = require('child_process').exec;
var url = require("url");

function onRequest(request, response) {
   var params = url.parse(request.url,true).query;
   function puts(error, stdout, stderr) {sys.puts(stdout)}
   exec("/usr/bin/feh --bg-center " + params.image, puts);
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Wallpaper');
}

http.createServer(onRequest).listen(8888);
