var express = require("express");
var app = express();
var fs = require("fs");

var user = {
    "user4":{
        "name" : "Sandhya",
        "password" : "password4",
        "profession" : "Teacher",
        "id" : 4
    }
}

app.post("/addUser" ,function(requset,response){
    fs.readFile(__dirname + "/" + "user.json" , "utf8" , function(error,data){
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        response.end(JSON.stringify(data));
    });
})

var server = app.listen(8080,function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
})