var express = require('express');
var app = express();

let animalFacts = ['Our animals come from all over the world',
    'They quite often come from harsh backgrounds and require extra care and support from us',
  'We can keep looking after them with your help',
'Donate today!!'];

app.use(express.static('client'));

app.get('/thing/list', function(req, resp){
    // resp.send(things);
    resp.json(animalFacts);
   })

var animals = require('/Users/amybarnhouse/Documents/Degree/Year 1/Programming/term 2/summative assignment/Charity/Charity-Website/client/animals.json');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
 
app.post('/new', function(req,resp){
    console.log('Got request');
    console.log(req.body);
    const name = req.body.name;
    const breed = req.body.breed;
    const description = req.body.description;
    const age = req.body.age;
    const country = req.body.country;
 
    const newAnimal = [{
        'name': name,
        'breed': breed,
        'description': description,
        'age': age,
        'country': country,
    }];
    newAnimal.push();
    resp.send('Thank you for submitting an animal' + newAnimal)
})


app.listen(8090)