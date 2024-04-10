const strongPassword = document.getElementById('strong-password');
const buttonPassword = document.getElementById('button-password');
const errorMessage = document.getElementById("error-message-password");
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()-_=+";
const allChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;

function generatePassword() {
    const lengthPasswordValue = parseInt(document.getElementById('length-password').value);

    if (lengthPasswordValue<12 || lengthPasswordValue>50){
        errorMessage.style.display = "block";
        strongPassword.innerHTML = "";
        return
    }

    errorMessage.style.display = "none";
    let password = "";

    password += uppercaseChars[(Math.floor(Math.random() * uppercaseChars.length))];
    password += lowercaseChars[(Math.floor(Math.random() * lowercaseChars.length))];
    password += numberChars[(Math.floor(Math.random() * numberChars.length))];
    password += symbolChars[(Math.floor(Math.random() * symbolChars.length))];

    for(let i = password.length; i < lengthPasswordValue; i++) {
        password += allChars[(Math.floor(Math.random() * allChars.length))];
    }

   strongPassword.innerHTML = password;
}

buttonPassword.addEventListener('click', generatePassword);
