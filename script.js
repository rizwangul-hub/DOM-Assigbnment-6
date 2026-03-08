// DOM-Assignment-6
// Submitted by Rizwan Ullah
//  Form Event and valadation

// Task-1 :  Prevent Form Submission
let formReloed = document.getElementById("formReloed");
formReloed.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Form Submitted Successfully");
});
// ............................................................
// Task-2 :
let formEmpty = document.getElementById("formEmpty");
formEmpty.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(formEmpty);
  let para_1 = formData.get("fullname");
  if (para_1 != "") {
    alert("Form Submitted Successfully");
  } else {
    alert("name is required");
  }
});
// ............................................................
// Task-3 :
let formEmail = document.getElementById("formEmail");
formEmail.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(formEmail);
  let para_2 = formData.get("email");
  if (para_2 != "") {
    alert("Form Submitted Successfully");
  } else if (!/\S+@\S+\.\S+/.test(para_2)) {
    alert("Invalid email format. email must contain @");
  } else {
    alert("email is required");
  }
});
// ............................................................
// Task-4 : Password Length Check
let formSubmit = document.getElementById("formSubmit");
formSubmit.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(formSubmit);
  let para_2 = formData.get("password");
  if (para_2.length < 6) {
    alert("Password must be at least 6 characters");
  } else {
    alert("Form Submitted Successfully");
  }
});
// ............................................................
// Task 5: Show Error Message in DOM
let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  let para_1 = formData.get("fullname");
  let para_2 = formData.get("email");
  let para_3 = formData.get("password");
  let para_4 = formData.get("confirm-password");
  let para_5 = formData.get("phone");
  let para_6 = formData.get("gender");
  let Data = Object.fromEntries(formData.entries());

  let fullname_error = document.getElementById("fullname-error");
  fullname_error.innerText = "pllease fill the fild";
  let email_error = document.getElementById("email-error");
  email_error.innerText = "pllease fill the fild";
  let password_error = document.getElementById("password-error");
  password_error.innerText = "pllease fill the fild";
  let confirm_password_error = document.getElementById(
    "confirm-password-error",
  );
  confirm_password_error.innerText = "pllease fill the fild";
  let phone_error = document.getElementById("phone-error");
  phone_error.innerText = "pllease fill the fild";
  let gender_error = document.getElementById("gender-error");
  gender_error.innerText = "pllease fill the fild";
  if (para_1 != "") {
    fullname_error.innerText = "";
  } else if (para_2 != "") {
    email_error.innerText = "";
  } else if (para_3 != "") {
    password_error.innerText = "";
  } else if (para_4 != "") {
    confirm_password_error.innerText = "";
  } else if (para_5 != "") {
    phone_error.innerText = "";
  } else if (para_6 != "") {
    gender_error.innerText = "";
  }
});
// ............................................................
// Task-6 : Reset Form
let formRest = document.getElementById("formRest");
formRest.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(formRest);
  let para_1 = formData.get("rest-username");
  let para_2 = formData.get("rest-email");
  let para_3 = formData.get("rest-password");
  para_1.innerText = "";
  para_2.innerText = "";
  para_3.innerText = "";
});
// ...................................................................
// DOM-Assignment-6 is End///