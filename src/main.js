const http = require('http');
const server = http.createServer((request,response)=>{
    response.writeHead(200,{
        'Content-Type':'text/html'
    })
    response.write('<input />');
    response.end();
})

server.listen(3000,()=>{
    console.log('服务已启动');
})