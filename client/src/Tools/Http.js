import axios from 'axios';
import store from '../stores';

// Do http request, time out after 5 sec
export default () => {
  const state = store.getState();
  console.log(state);

  return axios.create({
    baseURL: 'http://localhost:3333/api',
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${state.user.token}`
    }
  });
};
