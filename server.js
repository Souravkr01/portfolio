var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){
    if(req.url === "/"){
        fs.readFile("./public/index.html", "UTF-8", function(err, html){
            res.writeHead(200,{"Content-Type": "text/html"});
            res.end(html);
        });
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    }else if(req.url.match("\.jpg$")){
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-type": "image/jpg.webp"});
        fileStream.pipe(res);

    }else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("No page found");


    }

console.log(req.url);


}).listen(3000);
