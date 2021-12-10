// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '#', '$', '%', '&', '*'];
var result = [];

function generatePassword() {
  // Presents user with all password criteria they can select from
  window.alert("Select Password Criteria:\nLength of Password\nCharacter Type\nLowercase/Uppercase\nNumeric\nSpecialCharacters");

  //Confirms if the user wants to use the following requirements
  var passwordLength = window.prompt("Enter passsword length requirement (8-128 characters)")
    if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter valid password length");
      console.log(result);
    }
  var uppercase = window.confirm("Would you like your password with an uppercase requirement?")
    if (uppercase === true) {
      result = result + uppercase;
    } console.log(result);

  var number = window.confirm("Would you like your password with numbers?")
    if (number === true) {
      result = result + number;
    } console.log(result);

  var special = window.confirm("Would you like your password with special characters?")
    if (number == true) {
      result = result + special;
    } console.log(result);

  // for loop to concatenate and generate the password
  // for (var i = 0; i <= passwordLength; i++) {
  //      var result = Math.floor(Math.random() * passworLength)
  //   console.log(result);

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


//Run the Password Generator
// writePassword();
