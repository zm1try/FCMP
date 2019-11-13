import API_KEY from '../settings';

const fetchItems = async (sourceChannel) => {
  try {
    const url = `https://newsa1pi.org/v2/top-headlines?sources=${sourceChannel}&apiKey=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    const module = await import('./toaster');
    const res = await module.toaster();
    console.log(res);
    return null;
  }
};

export default fetchItems;
