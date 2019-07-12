import Http from '../../tools/http';
import { ON_USER_LOGIN } from '../enums';
import { showErrorMessage } from '../utilStore/utilAction';

export const onUserLogin = auth => dispatch => {
  console.log(auth);
  Http()
    .post('/logins', auth)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(e => dispatch(showErrorMessage(e)));
};
