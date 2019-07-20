import Http from 'tools/http';
import { FETCH_RECORDS } from 'stores/enums';
import { showErrorMessage } from './utilAction';

export const fetchRecords = () => dispatch => {
  return Http()
    .get(`record/all`)
    .then(({ data }) => {
      dispatch({ type: FETCH_RECORDS, records: data });
      console.log(data);
    })
    .catch(e => dispatch(showErrorMessage(e.response)));
};

export const fetchRecordsByRange = (start, end) => dispatch => {
  return Http()
    .get(`record/range/${start}/${end}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_RECORDS,
        records: data.records,
        start: data.start,
        end: data.end
      });
    })
    .catch(e => dispatch(showErrorMessage(e.response)));
};
