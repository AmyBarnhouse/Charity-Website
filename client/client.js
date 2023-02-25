// window.addEventListener('click', function(event){
//   fetch('http://127.0.0.1:8090/list')
//   .then(response => response.text())
//   .then(body =>document.getElementById('content').innerHTML=body)

// })

document.getElementById('submitBtn').addEventListener('click', function(event){
  fetch('http://127.0.0.1:8090/thing/list')
   .then(response => response.json())
   .then(body => renderThings(body))
   //.then(body => renderThings(JSON.parse(body)))
    //  document.getElementById('things').innerHTML=body)
      .catch((error) => alert(error))
});

function renderThings (animalFacts){
  //alert(things);
  let container = document.getElementById('animals');
  for(let thing of animalFacts){
     let item = document.createElement('li')
     item.innerHTML = thing;
     container.appendChild(item);
  }
  };

  var animals = require('./animals.json');
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

    const animal = {
        'name': name,
        'breed': breed,
        'description': description,
        'age': age,
        'country': country,
    };
    animals.push(animal);
    resp.send('Thank you for submitting an animal')
})

