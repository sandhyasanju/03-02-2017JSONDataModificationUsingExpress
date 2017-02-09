var express = require("express");
var app = express();
var fs = require("fs");

var json = require("jsonfile");

var user = {
    "user4":{
        "name" : "Sandhya",
        "password" : "password4",
        "profession" : "Teacher",
        "id" : 4
    }
}

app.put('/edit/:id', function(req, res) {
    var id = req.params.id;
    var newText = req.body.text;

    // read in the JSON file
    jsonfile.readFile('/path/to/file.json', function(err, obj) {
      // Using another variable to prevent confusion.
      var fileObj = obj;

      // Modify the text at the appropriate id
      fileObj[id].text = newText;

      // Write the modified obj to the file
      jsonfile.writeFile('/path/to/file.json', fileObj, function(err) {
          if (err) throw err;
      });
    });
});

app.post("/addUser" ,function(request,response){
    fs.readFile(__dirname + "/" + "user.json" , "utf8" , function(error,data){
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        response.end(JSON.stringify(data));
    });
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port);
})