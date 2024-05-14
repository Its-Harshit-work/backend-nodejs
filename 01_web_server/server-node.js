const http = require('http')

const hostname= '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url=='/') {
        res.statusCode=200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Hello and Hi")
    }
    else if (req.url=='/chai') {
        res.statusCode=200
        res.setHeader('Content-Type', 'text/plain')
        res.end("Thanks for ordering the amazing chai")
    }
    else{
        res.statusCode=404
        res.setHeader('Content-Type', 'text/plain')
        res.end("404 not found")
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server is listening at http://${hostname}:${port}`)
})

// //serve-string.js						
// var http = require('http');

// var host = '127.0.0.1'
// var port = 3000

// var server = http.createServer((request, response) => {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World!");
//   response.end();
// });

// server.listen(port,host, (error) => {  
//   if (error) {
//     return console.log('Error occured : ', error );
//   }

//   console.log('server is listening on https://' + host + ':'+ port);
// });	