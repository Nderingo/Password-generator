//Password characters

var passwordArray = [];
var password = "";
var numbers=["0","1","2","3","4","5","6","7","8","8","9"];

var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var specialCharacters=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "]"];

var generateBtn = document.querySelector("#generate");

function generatePassword () {
  var passwordLength = prompt("How many characters do you want your password to contain?");
  
  if (passwordLength < 8 || passwordLength > 128){
    alert("Your password must be between 8 and 128 characters!");
    generatePassword(); 
  }
  
  var useNumbers = confirm("Do you want to use numbers?");
  if (useNumbers===true) {
    console.log(passwordArray)
    passwordArray.push(...numbers);
    console.log(passwordArray)
  };
  
  var useSpecialCharacters = confirm("Do you want to use special characters?");
  if (useSpecialCharacters===true) {
    passwordArray.push(...specialCharacters);
    console.log(passwordArray)
  }; 
  
  var useLowerCase = confirm("Do you want to use lower case letters?");
  if (useLowerCase===true) {
    passwordArray.push(...lowerCase);
    console.log(passwordArray)
  };
  
  var useUpperCase = confirm("Do you want to use upper case letters?");
  if (useUpperCase===true) {
    passwordArray.push(...upperCase);
    console.log(passwordArray)
  }
  

  if (useUpperCase === false && useLowerCase === false && useNumbers === false && useSpecialCharacters === false) {
    alert("You must choose at least one character type!");
    return;
  } 
  console.log(passwordArray);
  for (var i=0; i < passwordLength; i++) 
    
    password +=  passwordArray[Math.floor(Math.random() * passwordArray.length)];
  
    return password;
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// console.log(writePassword);