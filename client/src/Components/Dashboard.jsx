import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import EntryForm from './Entry/EntryForm';

import { connect } from 'react-redux';
import { fetchRecordsByRange } from 'stores/actions/reviewAction';
import DateRangeSelector from 'components/Utilities/DateRangeSelector';
import BarChart from 'components/Charts/BarChart';

const mapStateToProps = ({ review }) => ({
  records: review.records
});

const mapDispatchToProps = {
  fetchRecordsByRange
};

class Home extends Component {
  _handleDateRangeChange = e => {};

  componentDidMount() {
    this.props.fetchRecordsByRange();
  }

  render() {
    return (
      <div>
        <Typography variant="h5" align="center">
          Dashboard
        </Typography>
        <DateRangeSelector />
        <BarChart />
        <EntryForm />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
