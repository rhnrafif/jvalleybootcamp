import Home from './src/pages/Home';
import './style.css'

const app = document.getElementById('app');
const page = window.location.pathname;

switch (page) {
  case "/":
    Home();
    break;

  case "/about":
    app.innerHTML = `<h1>About</h1>`
    break
  default:
    app.innerHTML = `<h1>Page Not Found</h1>`
}