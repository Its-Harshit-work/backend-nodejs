const fs = require("fs");

//Synchronous call

fs.writeFileSync('./test.txt', "Hey There");

//the above code will create a file in the current directory by the name of test.txt and will write "Hey There"
//If we change the above message to "Hello world" and save and run then it will override the previous file by deleting the file and recreating it

//Asynchronous call
fs.writeFile('./test.txt', "Hello world Async", (err)=>{});

const result= fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

//readFileSync (synchronous) will read the file and give the result in a variable while readFile (asynchronous) will not return the result


//Synchronous return the result and throws the error that can be handled by try catch

//while asynchronous expect us to provide it a callback function in which it will give error and result but will not return anything

fs.readFile("./contacts.txt", "utf-8", (err, result)=>{
    if(err){
        console.log("Error", err);
    }
    else{
        console.log(result);
    }
})

//append will not overrige instead it will append to whatever is previos written
fs.appendFileSync("./test.txt", `${Date.now()} Hey There\n`);

console.log(fs.statSync("./test.txt"));