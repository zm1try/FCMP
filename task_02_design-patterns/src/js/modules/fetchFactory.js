import fetchSources from './fetchSources';
import fetchItems from './fetchItems';

export default class FetchFactory {
  getFromServer(type, source) {
    switch (type) {
      case 'sources':
        return this.getSources();
      case 'items':
        return this.getItems(source);
      default: return null;
    }
  }

  getSources = async () => {
    try {
      return await fetchSources();
    } catch (error) {
      throw new Error(error);
    }
  };

  getItems = async (source) => {
    try {
      return await fetchItems(source);
    } catch (error) {
      throw new Error(error);
    }
  };
}
