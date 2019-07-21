import Http from 'tools/http';
import { FETCH_RECORDS, SET_FILTER_RANGE } from 'stores/enums';
import { showErrorMessage } from './utilAction';

export const fetchRecords = () => dispatch => {
  Http()
    .get(`record/all`)
    .then(({ data }) => {
      dispatch({ type: FETCH_RECORDS, records: data });
    })
    .catch(e => dispatch(showErrorMessage(e.response)));
};

/*export const fetchRecordsByRange = range => dispatch => {
  let formatted;
  if (range) {
    formatted = `${moment(range[0], 'MM/DD/YYYY').format(dateFormat)}/${moment(
      range[1],
      'MM/DD/YYYY'
    ).format(dateFormat)}`;
  } else {
    const startWeek = moment().startOf('week');
    const endWeek = moment().endOf('week');
    formatted = `${startWeek.format(dateFormat)}/${endWeek.format(dateFormat)}`;
  }
  Http()
    .get(`record/range/${formatted}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_RECORDS,
        records: data.records,
        start: data.start,
        end: data.end
      });
    })
    .catch(e => dispatch(showErrorMessage(e.response)));
};*/

export const setFilterRange = range => dispatch => {
  dispatch({
    type: SET_FILTER_RANGE,
    start: range[0],
    end: range[1]
  });
};
