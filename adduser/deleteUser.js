var express = require("express");
var app = express();
var fs = require("fs");

var id = 2;

// app.get('/deleteUser',function(request,response){
//     fs.readFile(__dirname + "/" + "user.json" , 'utf8' , function(error,data){
//         data = JSON.parse(data);
//         delete data["user" + id];

//         console.log(data);
//         response.end(JSON.stringify(data));
//     });
// })

app.get("/deleteUser",function(req,res){
    fs.readFile(__dirname + "/user.json","utf8",function(err,data){
        var data = JSON.parse(data);
        delete data["user3"];
        console.log("data");
        res.end(JSON.stringify(data));
    })
});

var server = app.listen(8080,function(){
    var host = server.address();
    var port = server.address().port

    console.log("server running at http://%s:%s",host,port);
})