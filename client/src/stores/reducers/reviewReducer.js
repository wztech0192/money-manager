import { FETCH_RECORD_GROUPS, FETCH_RECORDS } from '../enums';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_RECORD_GROUPS:
      return { ...state, token: action.token };
    case FETCH_RECORDS:

    default:
      return state;
  }
};
