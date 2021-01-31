function genereateArrays(lower, upper) {
  const arr = [];
  for (let j = lower; j <= upper; j++) {
    arr.push(j);
  }
  return arr;
}

const symbols = genereateArrays(33, 47)
  .concat(genereateArrays(58, 64))
  .concat(genereateArrays(92, 96))
  .concat(genereateArrays(123, 126));

const numbers = genereateArrays(48, 57);

const uppercase = genereateArrays(65, 90);

const lowercase = genereateArrays(97, 122);

let generateBtn = document.getElementById("generateBtn");
let genereatePassword = document.getElementById("password");
function generate() {
  let passwordLength = document.getElementById("passwordLength").value;
  let isNumbers = document.getElementById("isNumbers").checked;
  let isUppercase = document.getElementById("isUppercase").checked;
  let isSymbol = document.getElementById("isSymbol").checked;

  let password = "";
  let criteria = [];

  criteria = criteria.concat(lowercase);
  if (isNumbers) criteria = criteria.concat(numbers);
  if (isSymbol) criteria = criteria.concat(symbols);
  if (isUppercase) criteria = criteria.concat(uppercase);

  console.log(criteria);
  for (let i = 0; i < passwordLength; i++) {
    let code = criteria[Math.floor(Math.random() * criteria.length)];
    console.log(String.fromCharCode(code));
    password += String.fromCharCode(code);
  }

  genereatePassword.textContent = password;
  genereatePassword.style.display = "block";
}

generateBtn.addEventListener("click", generate);

genereatePassword.addEventListener("click", () => {
  navigator.clipboard
    .writeText(genereatePassword.textContent)
    .then((msg) => console.log("copied"))
    .catch((err) => console.log(err));
});
