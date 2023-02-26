// window.addEventListener('click', function(event){
//   fetch('http://127.0.0.1:8090/list')
//   .then(response => response.text())
//   .then(body =>document.getElementById('content').innerHTML=body)

// })

import data from './animals.json';

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

fetch('./animals.json')
  .then((response) => response.json())
  .then((json) => console.log(json));

