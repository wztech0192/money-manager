import {
  SUBMIT_RECORD,
  CLEAR_RECORD,
  SELECT_RECORD_GROUP,
  SELECT_RECORD_TYPE,
  SELECT_RECORD_TAB,
  ENTER_RECORD_DATE,
  ENTER_RECORD_MONEY,
  DISPLAY_RECORD_ERROR,
  ENTER_RECORD_SUMMARY
} from '../enums';

const defaultState = {
  selectType: null,
  selectTab: 0,
  selectGroup: 'All',
  recordDateTime: new Date(),
  recordSummary: '',
  recordMoney: '',
  recordErrors: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SUBMIT_RECORD:
      return defaultState;
    case CLEAR_RECORD:
      return defaultState;
    case SELECT_RECORD_TYPE:
      return {
        ...state,
        selectType: action.selectType
      };
    case SELECT_RECORD_GROUP:
      return {
        ...state,
        selectGroup: action.selectGroup
      };
    case SELECT_RECORD_TAB:
      return {
        ...state,
        selectTab: action.selectTab
      };
    case ENTER_RECORD_DATE:
      return {
        ...state,
        recordDateTime: action.recordDateTime
      };
    case ENTER_RECORD_MONEY:
      return {
        ...state,
        recordMoney: action.recordMoney
      };
    case ENTER_RECORD_SUMMARY:
      return {
        ...state,
        recordSummary: action.recordSummary
      };
    case DISPLAY_RECORD_ERROR:
      return {
        ...state,
        recordErrors: action.recordErrors
      };
    default:
      return state;
  }
};
