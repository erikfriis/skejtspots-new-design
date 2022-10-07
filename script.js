/* toggle between side-scroll sections */

let popularButton = document.getElementById("popularButton");
let closeByButton = document.getElementById("closeByButton");
let popular = document.getElementById("popular");
let closeBy = document.getElementById("closeBy");
let indicator = document.getElementById("indicator");

function moveRight() {
  indicator.classList.add("indicator-right");
}

function moveLeft() {
  indicator.classList.remove("indicator-right");
}

popularButton.addEventListener("click", moveLeft);

closeByButton.addEventListener("click", moveRight);

function showPopular() {
  popular.classList.add("display");
  popular.classList.remove("none");
  closeBy.classList.add("none");
  closeBy.classList.add("display");
}

function showCloseBy() {
  popular.classList.add("none");
  popular.classList.remove("display");
  closeBy.classList.add("display");
  closeBy.classList.remove("none");
}

popularButton.addEventListener("click", showPopular);

closeByButton.addEventListener("click", showCloseBy);

/* dropdown menu */

let fadedBackground = document.getElementById("fadedBackground");
let dropDownMenu = document.getElementById("dropDownMenu");
let siteNavbarToggleButton = document.getElementById("navToggle");

function toggleDropDownMenu() {
  fadedBackground.classList.toggle("faded-background-active");
  dropDownMenu.classList.toggle("dropdown-menu-active");
  siteNavbarToggleButton.classList.toggle("nav-toggle-button-rotate");
}

siteNavbarToggleButton.addEventListener("click", toggleDropDownMenu);
fadedBackground.addEventListener("click", toggleDropDownMenu);

// login/sign up form

function setFormMessages(formElement, type, message) {
  const messagesElement = formElement.querySelector(".login-form__message");

  messagesElement.textContent = message;
  messagesElement.classList.remove(
    "login-form__message-error",
    "login-form__message-succes"
  );
  messagesElement.classList.add(`login-form__message-${type}`);
}

function setInputError(inputElement, message) {
  inputElement.classList.add("login-form__input-error");
  inputElement.parentElement.querySelector(
    ".login-form__input-error-message"
  ).textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("login-form__input-error");
  inputElement.parentElement.querySelector(
    ".login-form__input-error-message"
  ).textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login");
  const createAccountForm = document.getElementById("createAccount");

  document
    .getElementById("linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("login-form-hidden");
      createAccountForm.classList.remove("login-form-hidden");
    });

  document.getElementById("linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("login-form-hidden");
    createAccountForm.classList.add("login-form-hidden");
  });

  /* open/close login/sign up form */

  let userButton = document.getElementById("userButton");
  let loginSignupForm = document.getElementById("loginSignupForm");

  userButton.addEventListener("click", () => {
    loginSignupForm.classList.add("toggleLogin");
  });

  let userButtonDesktop = document.getElementById("userButtonDesktop");

  userButtonDesktop.addEventListener("click", () => {
    loginSignupForm.classList.add("toggleLogin");
  });

  let closeloginSignupFormButton = document.getElementById(
    "closeLoginSignupForm"
  );

  closeloginSignupFormButton.addEventListener("click", () => {
    loginSignupForm.classList.remove("toggleLogin");
  });

  /* sing up/login form */

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault;

    setFormMessages(
      loginForm,
      "error",
      "Invalid username/password combination"
    );
  });

  document.querySelectorAll(".login-form__input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupUsername" &&
        e.target.value.length > 0 &&
        e.target.value.length < 5
      ) {
        setInputError(
          inputElement,
          "Usename must be at least 5 characters in length"
        );
      }
    });

    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
});

/* //fade in contact form on load

window.addEventListener("load", zoomFunc);

let formElement = document.getElementById("formId");

function fadeForm() {
  formElement.classList.add("formFadeIn");
}




//js for opacity fade
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", check_animation);

check_animation();

function check_animation() {
  const trigger = (window.innerHeight / 6) * 6;

  cards.forEach((card) => {
    console.log(card);
    const top = card.getBoundingClientRect().top;

    if (trigger > top) {
      card.classList.add("show_content");
    } else {
      card.classList.remove("show_content");
    }
  });
} */
