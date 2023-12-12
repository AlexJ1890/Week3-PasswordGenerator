document.addEventListener("DOMContentLoaded", function () {
    var textArea = document.getElementById("password");
    var generateButton = document.getElementById("generate");
  
    generateButton.addEventListener("click", function () {
      generatePassword();
    });
  
    function generatePassword() {
      var lengthInput = prompt("Request password length (between 8 and 128:");
  
      var length = parseInt(lengthInput, 10) || 12;
  
      if (length < 8 || length > 128) {
        alert("Enter a number between 8 and 128.");
        return;
      }
  
      var includeLowercase = confirm("Include lowercase letters?");
      var includeUppercase = confirm("Include uppercase letters?");
      var includeNumeric = confirm("Include numbers?");
      var includeSpecial = confirm("Include special characters?");
  
      let characters = "";
      if (includeLowercase) characters += "abcdefghijklmnopqrstuvwxyz";
      if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (includeNumeric) characters += "0123456789";
      if (includeSpecial) characters += "!@#$%^&*()_-+=<>?";
  
      if (characters === "") {
        alert("Select at least one character type");
        return;
      }
  
      let password = "";
  
      for (let i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
      }
  
      textArea.value = password;
    }
  });