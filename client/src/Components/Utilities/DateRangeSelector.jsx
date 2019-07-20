import React, { Component } from 'react';
import { connect } from 'react-redux';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';
import { fetchRecordsByRange } from 'stores/actions/reviewAction';

export class DateRangeSelector extends Component {
  render() {
    return (
      <div>
        <span>Select Date: </span>
        <Flatpickr
          options={{
            mode: 'range',
            dateFormat: 'Y-m-d'
          }}
          onChange={daterange => {
            if (daterange.length > 1) {
              this.props.fetchRecordsByRange(
                daterange[0].toLocaleDateString(),
                daterange[1].toDateString()
              );
            }
          }}
          value={null}
        />
      </div>
    );
  }
}

const mapDispatchToProps = { fetchRecordsByRange };

export default connect(
  false,
  mapDispatchToProps
)(DateRangeSelector);
