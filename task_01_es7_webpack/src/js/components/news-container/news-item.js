const componentClassName = 'news-container-item';

const item = ({
  newsItemName, newsItemDescription,
}) => {
  const component = document.createElement('div');
  component.classList.add(componentClassName);

  const title = document.createElement('p');
  title.textContent = 'Hello, I am news item';

  const name = document.createElement('p');
  name.textContent = newsItemName;

  const description = document.createElement('p');
  description.textContent = newsItemDescription;

  component.appendChild(title);
  component.appendChild(name);
  component.appendChild(description);

  return component;
};

export default item;
