const http = require("http")
const fs = require('fs')
const port = process.env.PORT || 3000;

// console.log(port)

const server =  http.createServer((req, res)=>{
    res.statusCode= 200;
    res.setHeader('content-type', 'text/html');
    if(req.url=="/")
    {
    res.statusCode= 200;
    data = fs.readFileSync('index.html')
    res.end(data.toString())
    }
    else if(req.url=="/about"){
        res.statusCode= 200;
        res.end("<h1>This is Ayushman's About page.</h1><p>hello to my about page</p>")
    }
    else if(req.url=="/maan"){
        res.statusCode= 200;
        res.end("<h1>Welcome to maan.</h1><p>He is Genious, Trillionaire and Philanthropist.</p>")
    }
    else{
        res.statusCode= 404;
        res.end("<h1>Error not found!</h1><p>The requested webpage was not found on the server.</p>")
    }
})

server.listen(port, ()=>{
    console.log(`Server is listening in port ${port}`)
})