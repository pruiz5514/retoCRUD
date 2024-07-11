import { UserManager } from "./classes/UserManager.js";
const id = document.querySelector("#id");
const nameUser = document.querySelector("#name");
const email = document.querySelector("#email");
const avatar = document.querySelector("#avatar");
const form = document.querySelector("form");
const url = "http://localhost:3000/users";
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userManager = new UserManager();
    userManager.crateUser(Number(id.value), nameUser.value, email.value, avatar.value, url);
});
