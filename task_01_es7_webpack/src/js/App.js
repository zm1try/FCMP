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
    const sources = async () => {
      const response = await this.loadNewsSources();
      this.sourceSelect = await this.sourceSelectRenderFunction({
        onSelectChange: this.onSelectChange,
        newsSource: this.newsSource,
        optionsList: response.sources,
      });
      this.component.appendChild(this.sourceSelect);
      this.newsContainer = await this.newsContainerRenderFunction({
        newsList: [],
      });
      this.component.appendChild(this.newsContainer);
    };
    sources();
  }

  loadNewsSources() {
    const some = { data: [] };
    const result = fetchSources(some)
      .then((res) => {
        this.newsSource = res.sources;
        return res;
      })
      .catch((err) => { throw err; });
    return result;
  }

  onSelectChange(event) {
    console.log('select');
    console.log(event.target.value);
    const items = async () => {
      const response = await fetchItems(event.target.value);
      this.newsContainer = await this.newsContainerRenderFunction({
        newsList: response.articles || [],
      });
      console.log(this.component);
      const oldItems = this.component.querySelector('.news-container');
      if (oldItems) {
        this.component.replaceChild(this.newsContainer, oldItems);
      } else {
        this.component.appendChild(this.newsContainer);
      }
    };
    items();
  }

  render() {
    return this.component;
  }
}

export default App;
