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
console.log(writePassword);
function generatePassword () {

  var passwordLength = prompt("How many characters do you want yourpassword to contain?")
   
  if (passwordLength < 8 && passwordLength > 128){
  alert("Your password must be between 8 and 128 characters!")
    }

    else {
var numbers = confirm("Do you want to use numbers?");
var useSpecialCharacters = confirm("Do you want to use special characters?");
var useLowerCase = confirm("Do you want to use lower case letters?");
var useUpperCase = confirm("Do you want to use capital letter?")

//Password characters
var numbers=["0","1","2","3","4","5","6","7","8","8","9"];

var lowerCaseLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCaseLetters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var specialCharacters=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"]

var password = "";
var empty = "";
var userInput = "";
    }
  // if (includeUpperCaseLetters === false && includeLowerCaseLetters === false && includeNumbers === false && includeSpecialCharacters === false) {
  //   alert("You must choose at least one character type!")

  //   }


  
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


}
