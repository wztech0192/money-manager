import { ON_USER_LOGIN } from 'stores/enums';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ON_USER_LOGIN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};
