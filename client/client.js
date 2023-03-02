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

  let id = null;
  /** This function produces an animation.
   * I have a cartoon image of a sun moving a small section along the page in response to the user pressing submit to subscibe to the mental health newsletter.
   * The intent is to make the user (target audience teens/students) feel happy about the prospect of working on their mental health.
   */
  function myMove () {
    const elem = document.getElementById('sun');
    let pos = 0;
    console.log(window.innerWidth);
    clearInterval(id);
    id = setInterval(frame, 2);
    function frame () {
      if (pos == 200) {
        clearInterval(id);
      } else {
        pos++;
        // elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }