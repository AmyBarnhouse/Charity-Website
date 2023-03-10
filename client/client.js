// prints list of animal facts
document.getElementById('submitBtn').addEventListener('click', (event) => {
  fetch('http://127.0.0.1:8090/thing/list')
    .then((response) => response.json())
    .then((body) => renderThings(body))
  // .then(body => renderThings(JSON.parse(body)))
    //  document.getElementById('things').innerHTML=body)
    .catch((error) => alert(error));
});

document.getElementById('submitBtn').onclick = function () {
  // disable
  this.disabled = true;

  // do some validation stuff
};

function renderThings(animalFacts) {
  // alert(things);
  const container = document.getElementById('animalFacts');
  for (const thing of animalFacts) {
    const item = document.createElement('li');
    item.innerHTML = thing;
    container.appendChild(item);
  }
}

// snackbar displays pop-up message when the user signs up 
//to provide a positive experience for them and show gratitude for sponsoring the animals.
document.getElementById('submitForm').addEventListener('click', (event) => {
/* find the div element where the snackbar will be inserted */
  const x = document.getElementById('snackbar');
  x.className = 'show';
  /* sets a timer so that the snackbar only shows for 3 seconds */
  setTimeout(() => { x.className = x.className.replace('show', ''); }, 3000);
});
let id = null;
/** This function produces an animation.
   * I have a cartoon image of a sun moving a small section along the page 
   * in response to the user pressing submit to subscibe to sanctuary's news.
   */

document.getElementById('submitForm').addEventListener('click', (event) => {
  const elem = document.getElementById('sun');
  let pos = 0;
  console.log(window.innerWidth);
  clearInterval(id);
  id = setInterval(frame, 2);
  function frame() {
    if (pos == 200) {
      clearInterval(id);
    } else {
      pos++;
      // elem.style.top = pos + 'px';
      elem.style.left = `${pos}px`;
    }
  }
});

document.getElementById('emailMsg').addEventListener('click', emailAlert);
/** Displays alert to user when they click to put in their email address. */
function emailAlert() {
  alert('We promise to only send you helpful and relevant information.');
}

// connects to json file
// fetch('./animals.json')
//   .then((response) => response.json())
//   .then((animals) =>{
//     const placeholder = document.querySelector('data-output');
//     let out = '';
//     for (let animal of animals.animals){
//       out += `
//       <tr>
//         <td>${animal.name}</td>
//         <td>${animal.breed}</td>
//         <td>${animal.description}</td>
//         <td>${animal.age}</td>
//         <td>${animal.country}</td>
//       </tr>
//       `;
//     }
//     placeholder.innerHTML = out;
//   });


document.getElementById('about0').addEventListener('click', (event) => {
  const box = document.createElement('p')
  box.setAttribute('id', 'boxAbout0')
})


fetch("animals.json")
.then(response => response.json())
.then(data => {
  document.querySelector('#aniName0').innerText = data[0].name
  document.querySelector('#aniBreed0').innerText = data[0].breed
  document.querySelector('#aniName1').innerText = data[1].name
  document.querySelector('#aniBreed1').innerText = data[1].breed
  document.querySelector('#aniName2').innerText = data[2].name
  document.querySelector('#aniBreed2').innerText = data[2].breed
  document.querySelector('#aniName3').innerText = data[3].name
  document.querySelector('#aniBreed3').innerText = data[3].breed
  document.querySelector('#aniName4').innerText = data[4].name
  document.querySelector('#aniBreed4').innerText = data[4].breed
  document.querySelector('#aniName5').innerText = data[5].name
  document.querySelector('#aniBreed5').innerText = data[5].breed
  document.querySelector('#aniName6').innerText = data[6].name
  document.querySelector('#aniBreed6').innerText = data[6].breed
  document.querySelector('#aniName7').innerText = data[7].name
  document.querySelector('#aniBreed7').innerText = data[7].breed
  document.querySelector('#aniName8').innerText = data[8].name
  document.querySelector('#aniBreed8').innerText = data[8].breed
  document.querySelector('#about0').innerText = data[0].age + ('\n') + data[0].description + ('\n') + data[0].country
})