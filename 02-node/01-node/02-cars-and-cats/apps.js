var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === "/images/auto-788747_1280.jpg"){
        fs.readFile('./images/auto-788747_1280.jpg',function(errors,contents){
            response.writeHead(200, {'Content-type': 'image/jpg'}),
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/corvette-171422_1280.jpg"){
        fs.readFile('./images/corvette-171422_1280.jpg',function(errors,contents){
            response.writeHead(200, {'Content-type': 'image/jpg'}),
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/cuba-1197800_1280.jpg"){
        fs.readFile('./images/cuba-1197800_1280.jpg',function(errors,contents){
            response.writeHead(200, {'Content-type': 'image/jpg'}),
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/cats"){
        fs.readFile('./views/cats.html', 'utf8', function(errors,contents){
            response.writeHead(200,{'Content-type':'text/html'}),
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/cat-694730_1280.jpg"){
        fs.readFile('./images/cat-694730_1280.jpg',function(errors,contents){
            response.writeHead(200,{'Content-type':'image/jpg'}),
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/tabby-114782_1280.jpg"){
        fs.readFile('./images/tabby-114782_1280.jpg',function(errors,contents){
            response.writeHead(200,{'Content-type':'image/jpg'}),
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/images/cat-778315_640.jpg"){
        fs.readFile('./images/cat-778315_640.jpg',function(errors,contents){
            response.writeHead(200,{'Content-type':'image/jpg'}),
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === "/cars/new"){
        fs.readFile('./views/new.html','utf8',function(errors,contents){
            response.writeHead(200,{'Content-type':'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(7077);
console.log("Running in localhost at port 7077");