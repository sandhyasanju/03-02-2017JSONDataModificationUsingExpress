var express = require("express");
var app = express();
var fs = require("fs");

app.get("/:id",function(request,response){
    fs.readFile(__dirname + "/" + "user.json",'utf8',function(error,data){
        users = JSON.parse(data);
        var user = users["user" + request.params.id]
        console.log(user);
        response.end(JSON.stringify(user));
    });
})

app.delete("/deleteUser",function(req,res){
    fs.readFile(__dirname + "/user.json","utf8",function(err,data){
        var data = JSON.parse(data);
        delete data["user3"];
        console.log("data");
        res.end(JSON.stringify(data));
    })
});

var server = app.listen(8080,function(){
    var host = server.address().address
    var port = server.address().port
    console.log("server is running at http://%s:%s",host,port);
})