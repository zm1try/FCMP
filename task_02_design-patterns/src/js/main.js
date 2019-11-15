import App from './App';

window.addEventListener(
  'DOMContentLoaded',
  () => {
    setTimeout(() => {
      const app = new App();
      app.init();
      document.body.appendChild(app.render());
    });
  },
  true,
);
