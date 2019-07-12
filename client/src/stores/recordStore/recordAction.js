import {
  SUBMIT_RECORD,
  CLEAR_RECORD,
  SELECT_RECORD_TYPE,
  SELECT_RECORD_TAB,
  SELECT_RECORD_GROUP,
  ENTER_RECORD_DATE,
  ENTER_RECORD_MONEY,
  ENTER_RECORD_SUMMARY,
  CREATE_NEW_GROUP,
  CREATE_NEW_TYPE,
  DISPLAY_RECORD_ERROR
} from '../enums';

export const onSelectType = e => dispatch =>
  dispatch({
    type: SELECT_RECORD_TYPE,
    selectType: e && e.target.textContent
  });

export const onSelectTab = (e, selectTab) => dispatch =>
  dispatch({
    type: SELECT_RECORD_TAB,
    selectTab
  });

export const onSelectGroup = e => dispatch =>
  dispatch({
    type: SELECT_RECORD_GROUP,
    selectGroup: e.target.textContent
  });

export const onEnterRecordDate = recordDateTime => dispatch =>
  dispatch({ type: ENTER_RECORD_DATE, recordDateTime });

export const onEnterRecordMoney = e => dispatch =>
  dispatch({ type: ENTER_RECORD_MONEY, recordMoney: e.target.value });

export const onEnterRecordSummary = e => dispatch =>
  dispatch({ type: ENTER_RECORD_SUMMARY, recordSummary: e.target.value });

export const onClearRecord = () => dispatch => dispatch({ type: CLEAR_RECORD });

export const onSubmitRecord = () => (dispatch, getState) => {
  console.log(getState());
};
export const onCreateType = () => (dispatch, getState) => {
  console.log(getState());
};
export const onCreateGroup = () => (dispatch, getState) => {
  console.log(getState());
};
