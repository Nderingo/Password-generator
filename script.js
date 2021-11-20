//Password characters
var numbersArray=["0","1","2","3","4","5","6","7","8","8","9"];

var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var specialCharacters=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"];

var passwordArray = [];
var userInput = "";
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(writePassword);
function generatePassword () {
  var passwordArray = [];
  var userPassword = ""

  var passwordLength = parseInt(prompt("How many characters do you want yourpassword to contain?"));
   
  if (passwordLength < 8 && passwordLength > 128){
    alert("Your password must be between 8 and 128 characters!");
    return; 
  }


var useNumbers = confirm("Do you want to use numbers?");
// TODO:if its a YES continue to loop and add use Numbers into the emptyArray
var useSpecialCharacters = confirm("Do you want to use special characters?");
// TODO:if its a YES continue to loop and add sPECIALcHARACTERS into the emptyArray
var useLowerCase = confirm("Do you want to use lower case letters?");
// TODO:if its a YES continue to loop and add lowerCase into the emptyArray
var useUpperCase = confirm("Do you want to use upper case letters?");
// TODO:if its a YES continue to loop and add upperCase into the emptyArray

if (useNumbers===true) {
  passwordArray = passwordArray.concat(numbersArray);
}
if (lowerCase===true) {
  passwordArray = passwordArray.concat(lowerCase);
}
if (upperCase===true) {
  passwordArray = passwordArray.concat(upperCase);
}
if (specialCharacters===true) {
  passwordArray = passwordArray.concat(specialCharacters);
} 
  if (useUpperCase === false && useLowerCase === false && useNumbers === false && useSpecialCharacters === false) {
    alert("You must choose at least one character type!");
     return;
    }
  for (var i=0; i<passwordLength;i++) {
  userPassword = userPassword + passwordArray[Math.floor(Math.random * passwordArray.length)];
  document.querySelector("#password").placeholder=userPassword;
  console.log(userPassword);
}

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
}
