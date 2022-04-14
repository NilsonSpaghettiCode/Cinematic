
const { response } = require("express");
const server = require("express");
const port = 5240;
var service = server();
service.get('/', function name(request, response) {
    response.send("Sending response..");
    
});

service.listen(port, ()=>{
    console.log(`New Connection! ${port}`);
});
