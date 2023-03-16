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
