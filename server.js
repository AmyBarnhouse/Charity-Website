const express = require('express');

const app = express();

const animalFacts = ['Our animals come from all over the world,',
  'They quite often come from harsh backgrounds and require extra care and support from us.',
  'We can keep looking after them with your help.',
  'Our visitor centre is open for families to come and meet our little friends all year round.',
  'Highlights include our petting stations and an animal-themed play area for children!',
  'Donate today!!'];

app.use(express.static('client'));


app.get('/thing/list', (req, resp) => {
  // resp.send(things);
  resp.json(animalFacts);
});


const bodyParser = require('body-parser');
const json = require('./client/animals.json');
const jsonV = require('./client/volunteers.json')

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/volunteer', (req, res) => {
  const search = req.query.search;
  res.send(JSON.stringify(jsonV));;
});

app.listen(8090, () => console.log('Listening on port 8090...'));

app.post('/sponsored', (req,res) =>{
  res.set('Content-Type', 'text/html');
  console.log('got request')
  console.log(req.body);
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { emailAdd } = req.body;
  const { animalChoice } = req.body;
  const { mediaRep } = req.body;
  signUp = [{
    'Name': firstName,
    'Surname': lastName,
    'Email Address': emailAdd,
    'Animal Sponsored': animalChoice,
    'How you found us': mediaRep,
  }];

  const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Official certificate of animal sponsorship 2023</title>
    <style>
      body {
        text-align: center
      }
      h2 {
        text-decoration: underline
      }
      @font-face {
        font-family: "My Custom Font";
        src: url(../fonts/LuckyfieldRegular.ttf) format("truetype");
    }
    .customFontTitle { 
        font-family: "My Custom Font", Verdana, Tahoma;
        font-weight: bolder;
    }
    </style>
  </head>
  <body>
    <h1>Thank you for sponsoring an animal!</h1>
    <h3>This certificate is presented to:</h3>
    <h2>${firstName} ${lastName}</h2>
    <h3>In recognition of sponsorship of ${animalChoice}</h3>
    <p></p>
    <img alt="picture of animal" src="client/media/cuddly.png"></img
    <p></p>
    <p>Print out this certificate and bring it to our sanctuary to make payment and receive your official ${animalChoice} Goodie Bag!</p>
  </body>
`;
  res.send(html);
});

// a new animal is added to the json file of all the animals, visible on 'http://127.0.0.1:8090/animal'
app.post('/new', (req, resp) => {
  console.log('Got request');
  console.log(req.body);
  const { name } = req.body;
  const { breed } = req.body;
  const { description } = req.body;
  const { age } = req.body;
  const { country } = req.body;

  newAnimal = [{
    'name': name,
    'breed': breed,
    'description': description,
    'age': age,
    'country': country
  
  }];

  console.log(newAnimal)
  reply = {note: 'Thank you for submitting a new animal request',
    name: name,
    breed: breed,
    description: description,
    age: age,
    country: country};
  string = JSON.stringify(reply);
  resp.send(string);
  console.log(string);
  newAnimal.push();

  console.log(json);
  json.push(newAnimal);
  jsonstr = JSON.stringify(json);
  console.log(json);
  console.log('gsjsgjsgb');
  console.log(jsonstr);

  console.log(json);
});

app.get('/animal', (req, res) => {
  const search = req.query.search;
  res.send(JSON.stringify(json));
});