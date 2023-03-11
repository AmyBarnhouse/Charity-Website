const express = require('express');

const app = express();

const animalFacts = ['Our animals come from all over the world,',
  'They quite often come from harsh backgrounds and require extra care and support from us.',
  'We can keep looking after them with your help.',
  'Our visitor centre is open for families to come and meet our little friends all year round.',
  'Highlights include our petting stations and an animal-themed play area for children!',
  'Donate today!!'];

app.use(express.static('client'));

// app.get('/', (req,res) => {
//     res.send('hello world');
// })

// app.get('/api/courses', (req, res) => {
//     res.send([1,2,3,4]);
// })

app.get('/thing/list', (req, resp) => {
  // resp.send(things);
  resp.json(animalFacts);
});


const bodyParser = require('body-parser');
const json = require('./client/animals.json');
const jsonV = require('./client/volunteers.json')

app.use(bodyParser.urlencoded({ extended: false }));

// a new animal is added to the json file of all the animals, visible on 'http://127.0.0.1:8090/animal'
app.post('/new', (req, resp) => {
  console.log('Got request');
  console.log(req.body);
  const { name } = req.body;
  const { breed } = req.body;
  const { description } = req.body;
  const { age } = req.body;
  const { country } = req.body;

  let newAnimal = [{
    'name': name,
    'breed': breed,
    'description': description,
    'age': age,
    'country': country
  }];

  console.log(newAnimal)
  let reply = {
    note: 'Thank you for submitting a new animal request.',
    name: name,
    breed: breed,
    description: description,
    age: age,
    country: country
  }
  let string = reply.stringify
  resp.send(string);
  console.log(reply)
  newAnimal.push();

  console.log(json)
  json.push(newAnimal);
  jsonstr = JSON.stringify(json);
  console.log(json)
  console.log('gsjsgjsgb')
  console.log(jsonstr)

  console.log(json)
});

app.get('/animal', (req, res) => {
  const search = req.query.search;
  res.send(JSON.stringify(json));;

  for (let i = 0; i < animals.length; i++) {
    let animal = animals[i];
    if (animal.breed.includes(search)) {
      results.push(animal.fun_fact);
    }
  }
  res.send(results);
});

app.get('/volunteer', (req, res) => {
  const search = req.query.search;
  res.send(JSON.stringify(jsonV));;

  for (let i = 0; i < volunteers.length; i++) {
    let volunteer = volunteers[i];
    if (volunteer.tag.includes(search)) {
      results.push(volunteer.tag);
    }
  }
  res.send(results);
});

app.listen(8090, () => console.log('Listening on port 8090...'));
