import React, { Component } from 'react';
import EntryForm from './Entry/EntryForm';
import { connect } from 'react-redux';
import { setFilterRange, fetchRecords } from 'stores/actions/reviewAction';
import DateRangeSelector from 'components/Utilities/DateRangeSelector';
import BarChart from 'components/Charts/BarChart';
import { updatePageTitle } from 'tools/params';

const mapStateToProps = ({ review }) => ({
  records: review.records,
  start: review.start,
  end: review.end
});

const mapDispatchToProps = {
  setFilterRange,
  fetchRecords
};

class Dashboard extends Component {
  _handleDateRangeChange = e => {};

  componentDidMount() {
    updatePageTitle('Dashboard');
    this.props.fetchRecords();
  }

  render() {
    const { records, start, end } = this.props;
    return (
      <div>
        <div className="max-width">
          <DateRangeSelector onDateChange={this.props.setFilterRange} />
          <br />
          <BarChart records={records} start={start} end={end} />
          <br />
          <EntryForm />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
