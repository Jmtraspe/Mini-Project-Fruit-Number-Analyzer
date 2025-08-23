const BASE_NUMBER = 10;

function greetUser(name) {
  return `Hello, ${name}!`;
}

function analyze() {
  const name = document.getElementById("nameInput").value;
  const number = parseFloat(document.getElementById("numberInput").value);
  const sentence = document.getElementById("sentenceInput").value;

  const fruit1 = document.getElementById("fruit1").value;
  const fruit2 = document.getElementById("fruit2").value;
  const fruit3 = document.getElementById("fruit3").value;

  let output = `<h2>Results:</h2>`;

  output += `<p>${greetUser(name)}</p>`;

  output += `
    <h3>Arithmetic with BASE_NUMBER (${BASE_NUMBER}):</h3>
    <ul>
      <li>Sum: ${BASE_NUMBER + number}</li>
      <li>Difference: ${BASE_NUMBER - number}</li>
      <li>Product: ${BASE_NUMBER * number}</li>
      <li>Quotient: ${number !== 0 ? (BASE_NUMBER / number).toFixed(2) : "Cannot divide by 0"}</li>
    </ul>
  `;

  output += `
    <h3>Sentence Transform:</h3>
    <p>Uppercase: ${sentence.toUpperCase()}</p>
    <p>Lowercase: ${sentence.toLowerCase()}</p>
  `;

  if (!isNaN(number)) {
    output += `
      <h3>Number Analysis:</h3>
      <p>${number >= 0 ? "The number is positive." : "The number is negative."}</p>
      <p>${number >= 0 ? "Positive" : "Negative"}</p>
    `;
  } else {
    output += `
      <h3>Number Analysis:</h3>
      <p>Invalid input: not a number.</p>
    `;
  }

  output += `<h3>For Loop (1 to ${number}):</h3><p>`;
  for (let i = 1; i <= number; i++) {
    output += i + " ";
  }
  output += `</p>`;

  output += `<h3>While Loop (Countdown from 5):</h3><p>`;
  let count = 5;
  while (count > 0) {
    output += count + " ";
    count--;
  }
  output += `</p>`;

  const fruits = [fruit1, fruit2, fruit3];
  output += `<h3>Favorite Fruits:</h3><ul>`;
  fruits.forEach(fruit => {
    output += `<li>${fruit}</li>`;
  });
  output += `</ul>`;

  document.getElementById("output").innerHTML = output;
}
