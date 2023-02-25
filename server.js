var express = require('express');
var app = express();


app.use(express.static('client'));

let animalFacts = ['Our animals come from all over the world',
    'They quite often come from harsh backgrounds and require extra care and support from us',
  'We can keep looking after them with your help',
'Donate today!!'];

app.get('/thing/list', function(req, resp){
    // resp.send(things);
    resp.json(animalFacts);
   })

app.get("/new", (request, response) => {
    response.send("index.html");
    });

app.listen(8090)