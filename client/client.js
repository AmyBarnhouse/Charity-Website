function renderThings(animalFacts) {
  // alert(things);
  const container = document.getElementById('animalFacts');
  // eslint-disable-next-line no-restricted-syntax
  for (const animalFact of animalFacts) {
    const listItem = document.createElement('li');
    listItem.innerHTML = animalFact;
    container.appendChild(listItem);
  }
}

// prints list of facts about sponsorship of the farmyard animals
document.getElementById('submitBtn').addEventListener('click', () => {
// checks to see if animalFacts ul is empty
// if so, fetch list of animalFacts and populate using renderThings function
  if (document.getElementById('animalFacts').getElementsByTagName('li').length === 0) {
    fetch('http://127.0.0.1:8090/thing/list')
      .then((response) => response.json())
      .then((body) => renderThings(body))
      .catch((error) => alert(error));
  }
});

// window.getElementById('volunteers').addEventListener('click', () => {
//   console.log('got results');
// });

// snackbar displays pop-up message when the user signs up
// to provide a positive experience for them and show gratitude for sponsoring the animals.
document.getElementById('submitForm').addEventListener('click', () => {
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

document.getElementById('submitForm').addEventListener('click', () => {
  const sunImage = document.getElementById('sun');
  let position = 0;
  // console.log(window.innerWidth);
  // clearInterval(id);

  function frame() {
    if (position === 200) {
      clearInterval(id);
    } else {
      // eslint-disable-next-line no-plusplus
      position++;
      // elem.style.top = pos + 'px';
      sunImage.style.left = `${position}px`;
    }
  }

  id = setInterval(frame, 2);
});

// // eslint-disable-next-line no-use-before-define
// document.getElementById('emailMsg').addEventListener('click', emailAlert);
// /** Displays alert to user when they click to put in their email address. */
// function emailAlert() {
//   // eslint-disable-next-line no-alert
//   alert('We promise to only send you helpful and relevant information.');
// }

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


// document.getElementById('about0').addEventListener('click', (event) => {
//   const box = document.createElement('p')
//   box.setAttribute('id', 'boxAbout0')
// })

// fetch('animals.json')
// .then((response) => response.json())
// .then(data => {
//   document.querySelector('#aniName0').innerText = data[0].name;
//   document.querySelector('#aniBreed0').innerText = data[0].breed;
//   document.querySelector('#aniName1').innerText = data[1].name;
//   document.querySelector('#aniBreed1').innerText = data[1].breed;
//   document.querySelector('#aniName2').innerText = data[2].name;
//   document.querySelector('#aniBreed2').innerText = data[2].breed;
//   document.querySelector('#aniName3').innerText = data[3].name;
//   document.querySelector('#aniBreed3').innerText = data[3].breed;
//   document.querySelector('#aniName4').innerText = data[4].name;
//   document.querySelector('#aniBreed4').innerText = data[4].breed;
//   document.querySelector('#aniName5').innerText = data[5].name;
//   document.querySelector('#aniBreed5').innerText = data[5].breed;
//   document.querySelector('#aniName6').innerText = data[6].name;
//   document.querySelector('#aniBreed6').innerText = data[6].breed;
//   document.querySelector('#aniName7').innerText = data[7].name;
//   document.querySelector('#aniBreed7').innerText = data[7].breed;
//   document.querySelector('#aniName8').innerText = data[8].name;
//   document.querySelector('#aniBreed8').innerText = data[8].breed;

// })

fetch('animals.json')
  .then((response) => response.json())
  .then((animals) => {
    animals.forEach((animal, index) => {
      // eslint-disable-next-line no-console
      console.log(animal);
      // eslint-disable-next-line no-console
      console.log(index);

      console.log('aniName' + index);
      console.log(animal.name);

      document.getElementById('aniName' + index).innerText = animal.name;
      document.getElementById('aniBreed' + index).innerText = animal.breed;
      document.getElementById('aniDesc' + index).innerText = animal.description;
      // document.getElementById('aniChoice' + index).innerText = animal.name

      document.getElementById('detailButton' + index).addEventListener('click', () => {
        let x = document.getElementById('aniDesc' + index);
        if (x.style.display === 'none') {
          x.style.display = 'block';
        } else {
          x.style.display = 'none';
        }
      });
    });
  });



// document.getElementById('volunteers').addEventListener('click', (event) => {
// fetch("volunteers.json")
// .then(response => response.json())
// .then(data => {
//   let names = data.map(element=> element.tag)
//   console.log(names)
// })
// }

// document.getElementById('volunteers').addEventListener('click', (event) => {
//   fetch('http://127.0.0.1:8090/volunteer')
//     .then((response) => response.json())
//     .then((body) => renderVols(body))
//   // .then(body => renderThings(JSON.parse(body)))
//     //  document.getElementById('things').innerHTML=body)
//     .catch((error) => alert(error));
// });

// function renderVols(volFarms){
//   const contain = documemt.getElementById('volHere');
//   for (const thing of volFarms) {
//     const item = document.createElement('li');
//     item.innerHTML = thing;
//     contain.appendChild(item);
//   }
// }

// function dropdown(){
// fetch('/animal')
// .then((response) => response.json())
// .then((data) => {
// console.log(data)
//   data.forEach(animal) 
//   const adopts = document.querySelector('select#aanimals');
//     console.log(adopts)
//     const opt = document.createElement('option');
//     opt.label = data.name;
//     opt.value = data.name;
//     adopts.appendChild(opt); 
//   }
// )}

// fetch('volunteers.json')
//   .then((response) => response.json())
//   .then((volunteers) => {
//     document.getElementById('volunteers').addEventListener('click', () => {
//       let x = document.getElementById('volunteerNames');
//       if (x.style.display === 'none') {
//         x.style.display = 'block';
//       } else {
//         x.style.display = 'none';
//       }
//     });
//   });

// function showInput() {
//   document.getElementById('display').innerHTML = 
//               document.getElementById("user_input").value;
