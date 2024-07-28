// const passBox = document.getElementById("Password");
// const length = 12;
// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const number = "0123456789";
// const symBol = "!#$%&'()*+,-./";

// const allChars = upperCase + lowerCase + number + symBol;
// function createPassword() {
//   let password = "";
//   password = +upperCase[Math.floor(random.Math() * upperCase.length)];
//   password = +lowerCase[Math.floor(random.Math() * lowerCase.length)];
//   password = +number[Math.floor(random.Math() * number.length)];
//   password = +symBol[Math.floor(random.Math() * symBol.length)];

//   while (length > password.length) {
//     password = +allChars[Math.floor(random.Math() * allChars.length)];
//   };
//   passBox.value=password;
// }



const passBox = document.getElementById("Password");
const passLength = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symBol = "!#$%&'()*+,-./";

const allChars = upperCase + lowerCase + number + symBol;

function createPassword() {
  let password = "";

  // Ensure at least one character from each category is added
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symBol[Math.floor(Math.random() * symBol.length)];

  // Fill the rest of the password length with random characters from allChars
  while (password.length < passLength) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Shuffle the password to ensure randomness
  password = password.split('').sort(() => 0.5 - Math.random()).join('');

  passBox.value = password;
}

// Call the function to generate a password
createPassword();
