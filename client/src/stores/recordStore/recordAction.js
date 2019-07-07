import {
  SUBMIT_RECORD,
  SELECT_RECORD_TYPE,
  SELECT_RECORD_TAB
} from '../actionTypes';

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
