const registrationForm = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const successMessage = document.getElementById("successMessage");

function setError(input, errorElement, message) {
  input.classList.add("input-error");
  input.classList.remove("input-success");
  errorElement.textContent = message;
}

function setSuccess(input, errorElement) {
  input.classList.remove("input-error");
  input.classList.add("input-success");
  errorElement.textContent = "";
}

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  successMessage.textContent = "";

  nameInput.classList.remove("input-error", "input-success");
  emailInput.classList.remove("input-error", "input-success");
  phoneInput.classList.remove("input-error", "input-success");
  passwordInput.classList.remove("input-error", "input-success");
  confirmPasswordInput.classList.remove("input-error", "input-success");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (name === "") {
    setError(nameInput, nameError, "Please enter your full name.");
    isValid = false;
  } else if (name.length < 3) {
    setError(nameInput, nameError, "Name must contain at least 3 characters.");
    isValid = false;
  } else {
    setSuccess(nameInput, nameError);
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    setError(emailInput, emailError, "Please enter your email.");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    setError(emailInput, emailError, "Please enter a valid email address.");
    isValid = false;
  } else {
    setSuccess(emailInput, emailError);
  }

  const phonePattern = /^[0-9]{10}$/;

  if (phone === "") {
    setError(phoneInput, phoneError, "Please enter your phone number.");
    isValid = false;
  } else if (!phonePattern.test(phone)) {
    setError(phoneInput, phoneError, "Phone number must contain 10 digits.");
    isValid = false;
  } else {
    setSuccess(phoneInput, phoneError);
  }

  if (password === "") {
    setError(passwordInput, passwordError, "Please enter a password.");
    isValid = false;
  } else if (password.length < 6) {
    setError(
      passwordInput,
      passwordError,
      "Password must contain at least 6 characters.",
    );
    isValid = false;
  } else {
    setSuccess(passwordInput, passwordError);
  }

  if (confirmPassword === "") {
    setError(
      confirmPasswordInput,
      confirmPasswordError,
      "Please confirm your password.",
    );
    isValid = false;
  } else if (password !== confirmPassword) {
    setError(
      confirmPasswordInput,
      confirmPasswordError,
      "Passwords do not match.",
    );
    isValid = false;
  } else {
    setSuccess(confirmPasswordInput, confirmPasswordError);
  }

  if (isValid) {
    successMessage.textContent = "Account created successfully!";
    registrationForm.reset();

    nameInput.classList.remove("input-success");
    emailInput.classList.remove("input-success");
    phoneInput.classList.remove("input-success");
    passwordInput.classList.remove("input-success");
    confirmPasswordInput.classList.remove("input-success");
  }
});
