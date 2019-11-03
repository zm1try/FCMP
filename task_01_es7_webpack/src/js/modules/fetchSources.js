import API_KEY from '../settings';

const url = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`;

const fetchSources = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchSources;
