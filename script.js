const lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
const upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericString = "1234567890";
const specialCharString = `!"#$%&'(\`)*+,-./:;<=>?@[\\]^_{|}~`;

const lowerCaseArray = lowerCaseString.split("");
const upperCaseArray = upperCaseString.split("");
const numericArray = numericString.split("");
const specialCharArray = specialCharString.split("");

let generateBtn = document.querySelector("#passwordGeneratorButton");

generateBtn.addEventListener("click", genCharArray);

let passwordArray = [];

function genCharArray() {
  passwordArray = [];

  if (document.getElementById("charType0").checked) {
    passwordArray = passwordArray.concat(lowerCaseArray);
  }
  if (document.getElementById("charType1").checked) {
    passwordArray = passwordArray.concat(upperCaseArray);
  }
  if (document.getElementById("charType2").checked) {
    passwordArray = passwordArray.concat(numericArray);
  }
  if (document.getElementById("charType3").checked) {
    passwordArray = passwordArray.concat(specialCharArray);
  }
  displayPasswordResults();
}

function genPassLength() {
  passwordLength = document.getElementById("passLength").value;
  document.getElementById("lengthDisplay").innerHTML = " " + passwordLength;
}

let passwordLength = document.getElementById("passLength").value;

const passwordEl = document.getElementById("passwordDisplay");

const copyButton = document.getElementById("copyButton");

function passwordGenerator() {
  let userPassword = [];
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * passwordArray.length);
    let passwordChar = passwordArray[randomIndex];

    userPassword.push(passwordChar);
  }
  return userPassword.join("");
}

function displayPasswordResults() {
  const password = passwordGenerator();

 
  if (passwordArray.length === 0) {
    passwordEl.classList.add("alert");
    passwordEl.innerHTML = "!- Select at least one character set -!";
    return;
  }
  passwordEl.classList.remove("alert");
  copyButton.classList.remove("hideButton");
  passwordEl.innerHTML = password;
}


function copyPassword() {
  passwordEl.select();
  document.execCommand("copy");
}

