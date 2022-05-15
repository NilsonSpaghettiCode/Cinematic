const service = require("express");

service.disable("x-powered-by");

const port = 5240;

service.get('/', function name(request, response) {
    response.send("Sending response..");
    
});

service.listen(port, ()=>{
    console.log(`New Connection! ${port}`);
});
