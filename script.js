// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    console.log("Hello");


};


//Password characters

var numbers=["0","1","2","3","4","5","6","7","8","8","9"];

var lowerCaseLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCaseLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var specialCharacters=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"]

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many charactors do you want your password to contain?");
  console.log("passwordLength",passwordLength); 

};
//   // var password = generatePassword();

  
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

