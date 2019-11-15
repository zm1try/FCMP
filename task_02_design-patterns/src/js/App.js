import sourceSelectRenderer from './components/source-select/source-select';
import newsContainerRenderer from './components/news-container/news-container';

import FetchFactory from './modules/fetchFactory';

class App {
  constructor() {
    this.onSelectChange = this.onSelectChange.bind(this);
    this.sourceSelectRenderFunction = sourceSelectRenderer;
    this.newsContainerRenderFunction = newsContainerRenderer;
    this.fetchFactory = new FetchFactory();
    this.fetchFactoryHandler = new Proxy(
      this.fetchFactory,
      {
        get: (target, key) => {
          this.log.push({
            method: key,
            date: new Date(),
            arguments: undefined,
          });
          const that = this;
          console.log(this.log);
          return function foo(...args) {
            that.log[that.log.length - 1].arguments = args;
            return target[key].apply(this, args);
          };
        },
      },
    );
  }

  log = [];

  init() {
    this.component = document.createElement('main');
    this.component.classList.add('main-view');
    const renderSources = async () => {
      try {
        const response = await this.fetchFactoryHandler.getFromServer('sources');
        this.sourceSelect = await this.sourceSelectRenderFunction({
          onSelectChange: this.onSelectChange,
          newsSource: this.newsSource,
          optionsList: response.sources,
        });
        this.component.appendChild(this.sourceSelect);
        this.emptyNewsContainer = await this.newsContainerRenderFunction({
          newsList: [],
        });
        this.component.appendChild(this.emptyNewsContainer);
      } catch (error) {
        const module = await import('./modules/getToaster');
        const toaster = module.getToaster();
        toaster.setDescription(error);
        toaster.showToaster();
      }
    };
    renderSources();
  }

  onSelectChange(event) {
    const renderItems = async (source) => {
      try {
        const response = await this.fetchFactoryHandler.getFromServer('items', source);
        this.newsContainer = await this.newsContainerRenderFunction({
          newsList: response.articles || [],
        });
        const oldItems = this.component.querySelector('.news-container');
        if (oldItems) {
          this.component.replaceChild(this.newsContainer, oldItems);
        } else {
          this.component.appendChild(this.newsContainer);
        }
      } catch (error) {
        const module = await import('./modules/getToaster');

        // to check that toaster is singleton you can uncomment this
        // const toaster = module.getToaster(error);

        // but do not forget to comment out next two lines
        const toaster = module.getToaster();
        toaster.setDescription(error);
        toaster.showToaster();
      }
    };
    renderItems(event.target.value);
  }

  render() {
    return this.component;
  }
}

export default App;
