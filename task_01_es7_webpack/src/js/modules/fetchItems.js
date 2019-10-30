import API_KEY from '../settings';

const fetchItems = async (sourceChannel) => {
  const url = `https://newsapi.org/v2/top-headlines?sources=${sourceChannel}&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log('fetchItems');
};

export default fetchItems;
