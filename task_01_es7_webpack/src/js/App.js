import sourceSelectRenderer from './components/source-select/source-select';
import newsContainerRenderer from './components/news-container/news-container';

import fetchSources from './modules/fetchSources';
import fetchItems from './modules/fetchItems';

class App {
  constructor() {
    this.render = this.render.bind(this);
  }

  init() {
    console.log('here');
    this.component = document.createElement('main');
    this.component.classList.add('main-view');

    this.sourceSelectRenderFunction = sourceSelectRenderer;
    this.sourceSelect = this.sourceSelectRenderFunction({
      onSelectChange: this.onSelectChange,
      newsSource: this.newsSource,
      // optionsList: this.getSourcesList(),
      optionsList: [],
    });
    this.component.appendChild(this.sourceSelect);


    this.newsContainerRendererFunction = newsContainerRenderer;
    this.newsContainer = this.newsContainerRendererFunction({
      newsSource: this.newsSource,
      // newsList: this.getNewsList(),
      newsList: [],
    });
    this.component.appendChild(this.newsContainer);
    this.loadNewsSources();
    this.render();
  }

  loadNewsSources() {
    const some = { data: [] };
    const result = fetchSources(some)
      .then((res) => { this.a = res; })
      .catch((err) => { throw err; });
    console.log(some);
    return result;
  }

  loadNewsItems() {
    const result = fetchItems(this.newsSource)
      .then(this.render)
      .catch((err) => { throw err; });
    return result;
  }

  onSelectChange(event) {
    this.newsSource = event.target.value;
    this.loadNewsItems();
  }


  render() {
    const sourceSelect = this.sourceSelectRenderFunction({
      onSelectChange: this.onSelectChange,
      newsSource: this.newsSource,
      // optionsList: this.getSourcesList(),
      optionsList: [],
    });

    if (this.sourceSelect !== sourceSelect) {
      this.component.replaceChild(sourceSelect, this.sourceSelect);
      this.sourceSelect = sourceSelect;
    }

    const newsContainer = this.newsContainerRendererFunction({
      newsSource: this.newsSource,
      // newsList: this.getNewsList(),
      newsList: [],
    });

    if (this.newsContainer !== newsContainer) {
      this.component.replaceChild(newsContainer, this.newsContainer);
      this.newsContainer = newsContainer;
    }

    return this.component;
  }
}

export default App;
