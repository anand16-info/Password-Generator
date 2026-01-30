const passwordBox = document.getElementById("password");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");

const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]<>?/";

lengthValue.textContent = lengthSlider.value;

// update length text
lengthSlider.addEventListener("input", function () {
    lengthValue.textContent = lengthSlider.value;
});

// generate password
generateBtn.addEventListener("click", function () {
    let allChars = "";
    let password = "";

    if (uppercaseCheck.checked) allChars += upperChars;
    if (lowercaseCheck.checked) allChars += lowerChars;
    if (numbersCheck.checked) allChars += numberChars;
    if (symbolsCheck.checked) allChars += symbolChars;

    if (allChars === "") {
        alert("Select at least one option");
        return;
    }

    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    passwordBox.value = password;
});

// copy password
copyBtn.addEventListener("click", function () {
    if (passwordBox.value === "") return;

    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied");
});
