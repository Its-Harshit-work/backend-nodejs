const http = require("http")
const fs=require("fs");

const myServer = http.createServer((req, res) => {
    // const log = `${Date.now()}: New Req Recieved\n`;
    const log = `${Date.now()}: ${req.url}New Req Recieved\n`;
    fs.appendFile("log.txt", log, (err, data) =>{
        switch(req.url){
            case("/"):
                res.end("Hello in the home page");
                break;
            case("/about"):
                res.end("This is Harshit and you will know more about me with others");;
                break;
            default:
                res.end("404 Not Found");
        }
        // res.end("Hello from server Again");
    })
    // console.log(req.headers);
    
});

myServer.listen(8000, () => console.log("Server Started"));
