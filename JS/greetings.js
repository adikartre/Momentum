const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);

   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username);
   paingtGreetings(username);
}

function paingtGreetings(username){
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
   logoutBtn.classList.remove(HIDDEN_CLASSNAME);
}

function onLogout() {
   localStorage.removeItem(USERNAME_KEY);
   greeting.classList.add(HIDDEN_CLASSNAME);
   logoutBtn.classList.add(HIDDEN_CLASSNAME);
   loginInput.value = "";
   loginForm.classList.remove(HIDDEN_CLASSNAME);
}

logoutBtn.addEventListener("click", onLogout);

const localStorageUsername = localStorage.getItem(USERNAME_KEY);

if (localStorageUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paingtGreetings(localStorageUsername);
}