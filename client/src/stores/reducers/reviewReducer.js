import { FETCH_RECORDS, SET_FILTER_RANGE } from 'stores/enums';

import { dateFormat } from 'tools/params';
import moment from 'moment';

const defaultState = {
  records: [],
  start: moment()
    .subtract(6, 'days')
    .format(dateFormat),
  end: moment().format(dateFormat)
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_RECORDS:
      return {
        ...state,
        records: action.records
      };
    case SET_FILTER_RANGE:
      return {
        ...state,
        start: action.start,
        end: action.end
      };
    default:
      return state;
  }
};
