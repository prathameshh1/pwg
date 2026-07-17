const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const passwordField = document.getElementById("password");

generateBtn.addEventListener("click", () => {
  const length = parseInt(document.getElementById("length").value);

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}<>?";

  let chars = "";

  if (document.getElementById("uppercase").checked) chars += upper;
  if (document.getElementById("lowercase").checked) chars += lower;
  if (document.getElementById("numbers").checked) chars += numbers;
  if (document.getElementById("symbols").checked) chars += symbols;

  if (chars === "") {
    alert("Select at least one character type.");
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordField.value = password;
});

copyBtn.addEventListener("click", () => {
  if (passwordField.value === "") return;

  navigator.clipboard.writeText(passwordField.value);
  alert("Password copied!");
});