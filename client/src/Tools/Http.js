import axios from 'axios';
import store from '../stores';
import { baseURL } from './params';

// Do http request, time out after 5 sec
export default () => {
  const state = store.getState();

  return axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${state.user.token}`
    }
  });
};
