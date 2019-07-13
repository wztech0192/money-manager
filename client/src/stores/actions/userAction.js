import Http from '../../tools/http';
import { ON_USER_LOGIN } from '../enums';
import { showErrorMessage } from './utilAction';

export const onUserLogin = auth => dispatch => {
  return Http()
    .post('login', auth)
    .then(({ data }) => {
      dispatch({
        type: ON_USER_LOGIN,
        token: data.token
      });
    })
    .catch(e => dispatch(showErrorMessage(e)));
};
