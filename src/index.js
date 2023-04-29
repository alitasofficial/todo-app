// import styles
import "./styles/main.scss";
// import svg logo
import logo from "./assets/todo-icon.svg";
import generateJoke from "./generateJoke";

const todoLogo = document.getElementById("todo-logo");
todoLogo.src = logo;

const newJoke = generateJoke();

console.log(newJoke);
console.log(123);
