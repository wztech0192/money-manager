import Http from 'tools/http';
import {
  CLEAR_RECORD,
  SELECT_RECORD_TYPE,
  SELECT_RECORD_TAB,
  SELECT_RECORD_GROUP,
  ENTER_RECORD_DATE,
  ENTER_RECORD_MONEY,
  ENTER_RECORD_SUMMARY,
  CREATE_NEW_GROUP,
  CREATE_NEW_TYPE,
  DISPLAY_RECORD_ERROR,
  FETCH_RECORD_GROUPS,
  SUCCESS_MODAL,
  ON_MODAL_OPEN
} from '../enums';
import { showErrorMessage } from './utilAction';

export const fetchRecordGroups = () => dispatch =>
  Http()
    .get('group/all')
    .then(({ data }) => {
      dispatch({
        type: FETCH_RECORD_GROUPS,
        groups: data
      });
    })
    .catch(e => dispatch(showErrorMessage(e.response)));

export const onSelectType = val => dispatch =>
  dispatch({
    type: SELECT_RECORD_TYPE,
    selectType: val
  });

export const onSelectTab = (e, selectTab) => dispatch =>
  dispatch({
    type: SELECT_RECORD_TAB,
    selectTab
  });

export const onSelectGroup = val => dispatch =>
  dispatch({
    type: SELECT_RECORD_GROUP,
    selectGroup: val
  });

export const onEnterRecordDate = recordDate => dispatch =>
  dispatch({ type: ENTER_RECORD_DATE, recordDate });

export const onEnterRecordMoney = e => dispatch =>
  dispatch({
    type: ENTER_RECORD_MONEY,
    recordMoney: parseFloat(e.target.value.replace(/,/g, ''))
  });

export const onEnterRecordSummary = e => dispatch =>
  dispatch({ type: ENTER_RECORD_SUMMARY, recordSummary: e.target.value });

export const onCreateType = typeName => (dispatch, getState) => {
  const { selectGroup, groups } = getState().record;
  return Http()
    .post('type', {
      typeName,
      selectGroup
    })
    .then(({ data }) => {
      const group = groups.find(x => x.id === selectGroup);
      group.types.push(data);
      dispatch({
        type: CREATE_NEW_TYPE,
        groups: [...groups]
      });
    })
    .catch(e => dispatch(showErrorMessage(e.response)));
};
export const onCreateGroup = groupName => (dispatch, getState) => {
  const { selectTab } = getState().record;
  return Http()
    .post('group', {
      groupName,
      isPositive: selectTab
    })
    .then(({ data }) => {
      dispatch({
        type: CREATE_NEW_GROUP,
        group: data
      });
    })
    .catch(e => dispatch(showErrorMessage(e.response)));
};

export const onSubmitRecord = () => (dispatch, getState) => {
  const record = getState().record;
  return Http()
    .post('record', {
      recordMoney:
        record.selectTab === 0 ? -record.recordMoney : record.recordMoney,
      recordDate: record.recordDate,
      recordSummary: record.recordSummary,

      selectType: record.selectType
    })
    .then(({ data }) => {
      dispatch({
        type: ON_MODAL_OPEN,
        modalInfo: {
          open: true,
          type: SUCCESS_MODAL,
          title: 'Success',
          message: `Record #${data.id} has been successfully created`
        }
      });
      dispatch({
        type: CLEAR_RECORD
      });
    })
    .catch(({ response }) =>
      response.status === 400
        ? dispatch({ type: DISPLAY_RECORD_ERROR, errors: response.data })
        : dispatch(showErrorMessage(response))
    );
};

export const onClearRecord = () => dispatch => dispatch({ type: CLEAR_RECORD });
