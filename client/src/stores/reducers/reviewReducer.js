import { FETCH_RECORDS } from 'stores/enums';

const defaultState = { records: [] };

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_RECORDS:
      return {
        ...state,
        records: action.records,
        start: action.start,
        end: action.end
      };
    default:
      return state;
  }
};
