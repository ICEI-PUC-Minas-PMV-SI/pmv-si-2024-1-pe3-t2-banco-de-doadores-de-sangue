const setItemLocalStorage = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

const getItemLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const removeItemFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
