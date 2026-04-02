const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;

let email = document.querySelector("#email");
let pw = document.querySelector("#password");
let form = document.querySelector("form");
let emailSmall = document.querySelector("#Email-small");
let pwSmall = document.querySelector("#pw-small");

function emailPwValidator(dets) {
  dets.preventDefault();
  let isValid = true;
  //* global styles and logic stored outside any condition. Makes them accessible BY DEFAULT
  email.style.border = "1px solid #ccc";
  pw.style.border = "1px solid #ccc";
  emailSmall.textContent = "";
  //* By default empty error message fields
  pwSmall.textContent = "";

  if (!passwordRegex.test(pw.value)) {
    pw.style.border = "2px solid red";
    pwSmall.textContent = "Enter Valid Password Format";
    pwSmall.style.color = "red";
    pwSmall.style.marginTop = "2px";
    isValid = false;
  }

  if (!emailRegex.test(email.value)) {
    email.style.border = "2px solid red";
    emailSmall.textContent = "Enter Valid Email Format";
    emailSmall.style.color = "red";
    emailSmall.style.marginTop = "2px";
    isValid = false;
  }

  if (isValid) {
    alert("Everything is Correct✅");
    email.value = "";
    //* Reset default values to empty input fields
    pw.value = "";
  }
}

form.addEventListener("submit", emailPwValidator);
