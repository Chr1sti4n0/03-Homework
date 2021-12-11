// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercasearray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercasearray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberarray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialarray = ['!', '#', '$', '%', '&', '*'];
var result = [];

function generatePassword() {
  // Presents user with all password criteria they can select from
  window.alert("Select Password Criteria:\nLength of Password\nCharacter Type\nLowercase/Uppercase\nNumeric\nSpecialCharacters");

  //Confirms if the user wants to use the following requirements
  var passwordLength = parseInt(window.prompt("Enter passsword length requirement (8-128 characters)"))
    if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter valid password length");
      console.log(result);
    }
  var uppercase = window.confirm("Would you like your password with an uppercase requirement?")
    if (uppercase === true) {
      result = [...result, ...uppercasearray];
    } console.log(result);

  var lowercase = window.confirm("Would you like your password with an lowercase requirement?")
    if (lowercase === true) {
      result = [...result, ...lowercasearray];
    } console.log(result);    

  var number = window.confirm("Would you like your password with numbers?")
    if (number === true) {
      result = [...result, ...numberarray];
    } console.log(result);

  var special = window.confirm("Would you like your password with special characters?")
    if (special === true) {
      result = [...result, ...specialarray];
    } console.log(result);
    var passwordArray = [];
  // for loop to concatenate and generate the password
      for (var i = 0; i <= passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * result.length)
      var randomChar = result[randomIndex]
        passwordArray.push(randomChar);
      } 
      console.log(passwordArray);
      return passwordArray.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Run the Password Generator
// writePassword();
