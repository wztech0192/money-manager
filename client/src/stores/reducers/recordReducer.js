import {
  CLEAR_RECORD,
  SELECT_RECORD_GROUP,
  SELECT_RECORD_TYPE,
  SELECT_RECORD_TAB,
  ENTER_RECORD_DATE,
  ENTER_RECORD_MONEY,
  DISPLAY_RECORD_ERROR,
  ENTER_RECORD_SUMMARY,
  FETCH_RECORD_GROUPS,
  CREATE_NEW_GROUP,
  CREATE_NEW_TYPE
} from 'stores/enums';

const defaultState = {
  selectType: null,
  selectTab: 0,
  selectGroup: -1,
  recordDate: new Date(),
  recordSummary: '',
  recordMoney: '',
  recordErrors: [],
  groups: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_RECORD_GROUPS:
      return {
        ...state,
        groups: action.groups
      };
    case CREATE_NEW_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.group]
      };
    case CREATE_NEW_TYPE:
      return {
        ...state,
        groups: [...action.groups]
      };
    case CLEAR_RECORD:
      return {
        ...defaultState,
        selectTab: state.selectTab,
        groups: state.groups
      };
    case SELECT_RECORD_TYPE:
      return {
        ...state,
        selectType: action.selectType
      };
    case SELECT_RECORD_GROUP:
      return {
        ...state,
        selectGroup: action.selectGroup,
        selectType: null
      };
    case SELECT_RECORD_TAB:
      return {
        ...state,
        selectTab: action.selectTab,
        selectType: null,
        selectGroup: -1
      };
    case ENTER_RECORD_DATE:
      return {
        ...state,
        recordDate: action.recordDate
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
        recordErrors: action.errors
      };
    default:
      return state;
  }
};
