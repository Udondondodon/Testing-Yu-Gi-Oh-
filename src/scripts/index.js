import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import App from './views/app';
// import './components/hero';
import './components/header';
import './components/footer';
// import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  main: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
