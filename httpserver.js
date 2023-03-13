const http = require("http")

const port = process.env.PORT || 3000;

// console.log(port)

const server =  http.createServer((req, res)=>{
    // console.log(req)
    // console.log(res)
    console.log(req.url)
    res.statusCode= 200;
    res.setHeader('content-type', 'text/html');
    res.end("<h1>This is Ayushman.</h1><p>I am the best</p>")
})

server.listen(port, ()=>{
    console.log(`Server is listening in port ${port}`)
})