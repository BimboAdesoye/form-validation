let logIn = document.querySelector(".log-in");
let emailInput = document.querySelector(".email-input");
let passInput = document.querySelector(".pass-input");

logIn.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.value.length === 0 || passInput.value.length === 0) {
    alert("All input fields should be filled");
    return;
  }
  if (passInput.value.length < 6) {
    alert("Passord length must be more than 6.");
    return;
  }
  alert("Registration completed.");
});
 