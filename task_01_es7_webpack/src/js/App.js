import sourceSelectRenderer from './components/source-select/source-select';
import newsContainerRenderer from './components/news-container/news-container';

import fetchSources from './modules/fetchSources';
import fetchItems from './modules/fetchItems';

class App {
  constructor() {
    this.onSelectChange = this.onSelectChange.bind(this);
    this.sourceSelectRenderFunction = sourceSelectRenderer;
    this.newsContainerRenderFunction = newsContainerRenderer;
  }

  init() {
    this.component = document.createElement('main');
    this.component.classList.add('main-view');
    const renderSources = async () => {
      const response = await fetchSources();
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
    };
    renderSources();
  }

  onSelectChange(event) {
    const renderItems = async (value) => {
      const response = await fetchItems(value);
      this.newsContainer = await this.newsContainerRenderFunction({
        newsList: response.articles || [],
      });
      const oldItems = this.component.querySelector('.news-container');
      if (oldItems) {
        this.component.replaceChild(this.newsContainer, oldItems);
      } else {
        this.component.appendChild(this.newsContainer);
      }
    };
    renderItems(event.target.value);
  }

  render() {
    return this.component;
  }
}

export default App;
