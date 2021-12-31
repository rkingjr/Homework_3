// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*()?><{}"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordWord = ""
  var passwordFin = ""
  var lengthChoice = prompt(" Please choose a length between 8-128 characters.");
  if (lengthChoice < 8) {
    alert("Password must be between 8 and 120 characters! Please try again.");
    generatePassword();
  } else if (lengthChoice >120) {
    alert("Password must be between 8 and 120 characters! Please try again.");
    generatePassword();
  }

  var lowerChoice = confirm("Do you want to use lowercase characters?")
  if (lowerChoice === true) {
    passwordWord += lowerCase;
  }

  var upperChoice = confirm("Do you want to use uppercase characters?")
  if (upperChoice === true) {
    passwordWord += upperCase;
  }

  var numberChoice = confirm("Do you want to use numbers?")
  if (numberChoice === true) {
    passwordWord += numbers;
  }

  var specialChoice = confirm("Do you want to use special characters?")
  if (specialChoice === true) {
    passwordWord += special;
  }

  console.log(passwordWord);
  console.log(passwordFin);

for (let i=0; i < lengthChoice; i++) {
  // passwordWord[Math.floor(Math.random() * passwordWord.length)]
  passwordFin = passwordFin + passwordWord[Math.floor(Math.random() * passwordWord.length)];
  console.log(passwordFin);
}


  return passwordFin;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Pseudocode
// Present user series of prompts/confirms
    // let sign = prompt("What's your sign?");
    // length prompt - var lengthChoice
    // var lengthChoice = prompt(" Please choose a length between 8-128 characters.");
    // confirm("Press a button!");
    // lower confirm - var lowerChoice
    // var lowerChoice = confirm("Do you want to use lowercase characters?")

    // upper confirm - var upperChoice

    // nums confirm - var numsChoice

    // special confirm - var SpcChoice

// length prompt / number between 8 - 128
    // if/conditional check if length is between 8-128
        //  if true continue to confirms. false ask length again
// confirm for lower, upper, nums, special
// Input Validation - correct nums, atleast 1 character chosen
    // if/conditional check using || true continue to generate, false ask confirm again
// Randomly generate password string from choices
    // arrays of lower, upper, nums, special
    // array of all chosen characters, concat?
    // choose from the all options arr number of chars required(length prompt)
        // For loop, run based on length prompt
        // Math.random choose index postions from array
            // var foodItems = ["Bannana", "Apple", "Orange"];
            // var theFood = foodItems[Math.floor(Math.random() * foodItems.length)];
        // grab from chosen array, add to password array
        // convert array to string
        // return string
        // alert with password to the screen
// display password in text box- write to page
