// prints list of animal facts
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
  let container = document.getElementById('animalFacts');
  for(let thing of animalFacts){
     let item = document.createElement('li')
     item.innerHTML = thing;
     container.appendChild(item);
  }
  };


//snackbar displays pop-up message when the user signs up to provide a positive experience for them and show gratitude for sponsoring the animals.
document.getElementById("submitForm").addEventListener('click', function(event){
/* find the div element where the snackbar will be inserted */
const x = document.getElementById('snackbar');
x.className = 'show';
/* sets a timer so that the snackbar only shows for 3 seconds */
setTimeout(function () { x.className = x.className.replace('show', ''); }, 3000);
})
let id = null;
  /** This function produces an animation.
   * I have a cartoon image of a sun moving a small section along the page in response to the user pressing submit to subscibe to sanctuary's news.
   */

document.getElementById("submitForm").addEventListener('click', function(event){
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
  })


//connects to json file
fetch('./animals.json')
  .then((response) => response.json())
  .then((json) => console.log(json));
