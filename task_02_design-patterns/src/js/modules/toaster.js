export default class Toaster {
  constructor(description) {
    if (typeof Toaster.instance === 'object') {
      return Toaster.instance;
    }
    Toaster.instance = this;

    this.description = description;

    this.container = document.createElement('div');
    this.container.classList.add('toaster');

    return this;
  }

  description;

  setDescription(description) {
    this.description = description;
  }

  getDescription() {
    return this.description;
  }

  showToaster() {
    const body = document.querySelector('body');
    this.container.textContent = this.description;

    body.appendChild(this.container);
    setTimeout(() => {
      body.removeChild(this.container);
    }, 3000);
    return this.container;
  }
}
