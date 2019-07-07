import {
  SUBMIT_RECORD,
  SELECT_RECORD_TYPE,
  SELECT_RECORD_TAB
} from '../actionTypes';

const defaultState = {
  selectType: null,
  selectTab: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_RECORD_TYPE:
      return {
        ...state,
        selectType: action.selectType
      };
    case SELECT_RECORD_TAB:
      return {
        ...state,
        selectTab: action.selectTab
      };
    case SUBMIT_RECORD:
      return {};
    default:
      return state;
  }
};
