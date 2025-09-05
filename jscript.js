function changeText() {
  const para = document.getElementById('myParagraph');
  para.textContent = 'Gaming challenges my mind, and playing sports keeps me active and builds teamwork.';
}

function addListItem() {
  const ul = document.getElementById('myList');
  const li = document.createElement('li');
  li.textContent = 'Playing sports helps me stay healthy and have fun';
  ul.appendChild(li);
}

function removeElement() {
  const ul = document.getElementById('myList');
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  }
}
