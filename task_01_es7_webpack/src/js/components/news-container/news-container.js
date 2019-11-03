import newsItem from './news-item';

const componentClassName = 'news-container';
const titleClassName = `${componentClassName}-title`;

const newsContainerComponent = ({
  newsList,
}) => {
  const component = document.createElement('div');
  component.classList.add(componentClassName);

  const title = document.createElement('p');
  title.textContent = newsList.length
    ? 'Last 10 news from channel:'
    : 'You have not choosen channel or channel do not has news';
  title.classList.add(titleClassName);

  component.appendChild(title);
  newsList.forEach(item => component.appendChild(newsItem({
    newsItemTitle: item.title,
    newsItemContent: item.content,
    newsItemDescription: item.description,
    newsItemLink: item.url,
  })));
  return component;
};

export default newsContainerComponent;
