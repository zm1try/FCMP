import newsItem from './news-item';

const componentClassName = 'news-container';

const newsContainer = ({
  newsList,
}) => {
  const component = document.createElement('div');
  component.classList.add(componentClassName);
  const test = document.createElement('span');
  test.textContent = 'Hello, I am news holder';

  component.appendChild(test);

  newsList.forEach(item => component.appendChild(newsItem({
    newsItemName: item.name,
    newsItemDescription: item.description,
  })));
  return component;
};

export default newsContainer;
