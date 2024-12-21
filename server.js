const http = require("http");
const fs = require("fs");



const PORT = 2000;
const hostname = "localhost";
const home = fs.readFileSync("./index.html")


const server = http.createServer((req, res) =>{
    
     if(req.url === "/about"){
       return res.end("<h1> this is about </h1>")
     }

     if(req.url === "/contact"){
       return res.end("<h1> this is contact page </h1>")
     }

     if(req.url === "/"){
        return res.end(home)
     }else{
       return res.end("<h1> 404 Not Found </h1>")
     }

})

server.listen(PORT, hostname, ()=>{
    console.log("server is running and showing sahil on screen")
    console.log(`server is running on http://${hostname}:${PORT}`)
})

