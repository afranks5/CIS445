const http = require('http');

http.createServer(function(request, response) {
    //console.log(request);
    response.writeHead(200); //status code in header
    response.write("<html><body><p>Dog is running</p></body></html>"); //Response body
    setTimeout(function() {
         response.write("<html><body><p>Dog is done.</p></body></html>");
         response.end()
    }, 5000);
    
    //response.end(); //Close connection
    
}).listen(8080); //listen for connections on this port

console.log('Listening to port 8080');