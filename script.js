// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables used
var randomPassword
var upperCase = true
var numerical = true
var lowerCase = true
var numberofChars = 8
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
var numbersUsed = '123456789'
// Write password to the #password input

// random number generator
function getRandomInt(highestValue) {
  return Math.floor(Math.random() * highestValue)
}

// random password generator
function makePassword() {
  var setofChars = []
  if (upperCase) setofChars.push(...uppercaseLetters.split(""))
  if (lowerCase) setofChars.push(...lowercaseLetters.split(""))
  if (numerical) setofChars.push(...numbersUsed.split(""))
  console.log(setofChars)
  var randomPassword = []
  
  for (let i = 0; i < numberofChars; i++) {
    randomPassword.push(setofChars[getRandomInt(setofChars.length)])
  }
  
  
  randomPassword = randomPassword.join("")
  
  return (randomPassword)
}

// prompts for passwords
function passwordOptions() {

 
  var lowerCase =  confirm("Include lowercase characters, Y/N");
  console.log(lowerCase)

  var upperCase = confirm("Include uppercase characters, Y/N");
  console.log(upperCase) 

  var numerical = confirm("Include numerical characters, Y/N");
  console.log(numerical)

  document.querySelector("#password").innerHTML = makePassword();

  
};
 
function writePassword() {
  
   var password = generatePassword() ;
  var passwordText = document.querySelector("#password");

   passwordText.value = password;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", passwordOptions,)  ; {
  
}