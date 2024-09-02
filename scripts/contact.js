const contact = document.querySelector("#contact");

contact.innerHTML=`
<p>
  let's build together
  <a href="mailto:shaileshsolanke512@gmail.com">
  <img src="./assets/icons/mail.svg"/></a>
</p>
<pre class="fire"></pre>
`;

let width = 300;
let height = 30;

const fireChars = " 101010101010011001010101010101010101010101010101100101";
const maxCharIndex = fireChars.length;

let firePixelsArray = [];

for (let i = 0; i < width * height + 1; i++) {
  firePixelsArray[i] = 0;
}

generateFire = () => {
  let fireString = "";

  for (let i = 0; i < width; i++) {
    let randomCol = Math.floor(Math.random() * width);
    let index = randomCol + width * (height - 1);
    firePixelsArray[index] = Math.floor(Math.random() * maxCharIndex);
  }

  for (let i = 0; i < width; i++) {
    let randomCol = Math.floor(Math.random() * width);
    let index = randomCol + width * (height - 1);
    firePixelsArray[index] = 0;
  }

  for (let i = 0; i < width * (height - 1); i++) {
    let averageValue =
      (firePixelsArray[i] +
        firePixelsArray[i + 1] +
        firePixelsArray[i + width] +
        firePixelsArray[i + width + 1]) /
      4;

    firePixelsArray[i] = Math.floor(averageValue);

    fireString += fireChars[firePixelsArray[i]];
    if (i % width === 0) fireString += `\n`;
  }

  document.querySelector(".fire").innerText = fireString;
  setTimeout(generateFire, 50);
};

generateFire();
