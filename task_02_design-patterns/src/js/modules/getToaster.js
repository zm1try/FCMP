import Toaster from './Toaster';

export const getToaster = (description) => {
  const toaster = new Toaster(description);
  return toaster;
};

export default undefined;
