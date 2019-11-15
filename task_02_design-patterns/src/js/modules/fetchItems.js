import API_KEY from '../settings';

const fetchItems = async (sourceChannel) => {
  try {
    const url = `https://newsapi.org/v2/top-headlines?sources=${sourceChannel}&apiKey=${API_KEY}`;
    const response = await fetch(sourceChannel === '111' ? 'https://news.com' : url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(response.statusText);
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchItems;
