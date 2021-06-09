// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Event listener to generate button
generateBtn.addEventListener("click", writePassword);

//This looks for what the password has to contain
function generatePassword() {
  var pass = prompt("Enter L for lowercase, U for uppercase, N for numeric and/or S for special characters", "");
  var isLowercase = pass.includes("L");
  var isUppercase = pass.includes("U");
  var isNumeric = pass.includes("N");
  var isSpecialChar = pass.includes("S");
  if (!isLowercase && !isUppercase && !isNumeric && !isSpecialChar){
  	alert("Please select at least one option")
    return
  }
  
  //Set the minimum and maximum length of the password
	var lengthPassword = prompt("Choose a length of at least 8 characters and no more than 128 characters", "8");
  if (lengthPassword < 8 && lengthPassword > 128) {
   alert("Your selection has to be between 8 and 128 characters")
   return
   }
  //This string has the "values" 
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var specialChar = "!@#$%^&*-_,.;?";
 	
  var userPassword = "";
  
  if(isLowercase) {
    userPassword = userPassword + lowercase;
  }
  if(isUppercase) {
    userPassword = userPassword + uppercase;
  }
  if(isNumeric) {
    userPassword = userPassword + numeric;
  }
  if(isSpecialChar) {
    userPassword= userPassword + specialChar;
  }
  
  var finalPassword = "";
 
  //This is the random algorithm
  for (var i = 0; i < lengthPassword; i++) {
    var random = Math.floor(Math.random() *userPassword.length);
    finalPassword = finalPassword + userPassword[random];
  }
//This is to verify the password in the console.
  console.log(finalPassword);

return finalPassword;
  
}
