const itemClassName = 'news-container-item';
const itemTitleClassName = `${itemClassName}-title`;
const itemContentClassName = `${itemClassName}-content`;
const itemLinkClassName = `${itemClassName}-link`;

const newsItemComponent = ({
  newsItemTitle, newsItemContent, newsItemDescription, newsItemLink,
}) => {
  const component = document.createElement('div');
  component.classList.add(itemClassName);
  component.title = newsItemDescription;

  const title = document.createElement('h4');
  title.textContent = newsItemTitle;
  title.classList.add(itemTitleClassName);

  const content = document.createElement('p');
  content.textContent = newsItemContent;
  content.classList.add(itemContentClassName);

  const link = document.createElement('a');
  link.textContent = 'link to article';
  link.href = newsItemLink;
  link.classList.add(itemLinkClassName);

  component.appendChild(title);
  component.appendChild(content);
  component.appendChild(link);

  return component;
};

export default newsItemComponent;
