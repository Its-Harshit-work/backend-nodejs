// const http = require("http")
// const fs=require("fs");
// const url = require("url");
// const { send } = require("process");

//app is a handler function here
const express = require("express");
const app=express();

app.get("/", (req, res) =>{
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Recieved\n`;
    return res.send(`Hello ${req.query.name}`);
});

app.get("/about", (req, res)=>{
    return res.send("Hello in the about page")
})

app.listen(8000, ()=> console.log("Server Started"));
// const myServer = http.createServer((app));
// myServer.listen(8000, () => console.log("Server Started"));

/*
const myServer = http.createServer((req, res) => {
    if(req.url=="/favicon.ico") return res.end();
    // const log = `${Date.now()}: New Req Recieved\n`;
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Recieved\n`;
    const myUrl = url.parse(req.url, true);
    // console.log(myUrl);
    fs.appendFile("log.txt", log , (err, data) =>{
        switch(myUrl.pathname){
            case("/"):
                if(req.method==="GET") res.end("Hello in the home page");
                break;
            case("/about"):
                const username=myUrl.query.myname;
                res.end(`Hello, ${username} This is Harshit and you will know more about me with others`);;
                break;
            case("/signup"):
                if(req.method==="GET") res.end("This is a signup form");
                else if (req.method==="POST"){
                    //DB Query
                    res.end("Success");
                }
                break;
            default:
                res.end("404 Not Found");
        }
        // res.end("Hello from server Again");
    })
    // console.log(req.headers);
    
});
*/