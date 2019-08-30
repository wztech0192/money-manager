export const baseURL = document.getElementById('baseURL').value;

export const baseRoute = '/moma';

export const dateFormat = 'MM-DD-YYYY';

export const updatePageTitle = newTitle => {
  document.getElementById('title').innerHTML = newTitle;
};
