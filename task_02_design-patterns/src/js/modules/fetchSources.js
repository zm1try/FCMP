import API_KEY from '../settings';

const url = `https://newsapi.org/v2/sources?apiKey=${API_KEY}`;

const fetchSources = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    const module = await import('./toaster');
    console.log(module);
    return null;
  }
};

export default fetchSources;
