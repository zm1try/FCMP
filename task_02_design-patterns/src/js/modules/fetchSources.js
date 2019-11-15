import API_KEY from '../settings';

const url = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`;

const fetchSources = async () => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error(response.statusText);
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchSources;
