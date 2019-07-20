import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';

const options = {
  legend: { display: true, position: 'bottom' },
  scales: {
    xAxes: [
      {
        stacked: true,
        ticks: {
          autoSkip: true,
          maxTicksLimit: 7
        }
      }
    ],
    yAxes: [
      {
        stacked: true,
        ticks: {
          autoSkip: true
        }
      }
    ]
  },

  maintainAspectRatio: true,
  tooltips: { mode: 'x' }
};

const data = {
  datasets: [
    {
      data: [],
      label: 'Income',
      borderWidth: 2,
      backgroundColor: 'rgba(76, 175, 80,0.3)',
      borderColor: '#4caf50',
      type: 'bar'
    },
    {
      data: [],
      label: 'Outcome',
      borderWidth: 2,
      backgroundColor: 'rgba(244, 67, 54, 0.3)',
      borderColor: '#f44336',
      type: 'bar'
    },
    {
      data: [],
      label: 'Sum',
      borderWidth: 2,
      backgroundColor: 'rgba(63, 81, 181,0.6)',
      borderColor: '#3f51b5',
      type: 'line',
      fill: false
    }
  ],
  labels: []
};

export class BarChart extends Component {
  state = {
    outcome: [],
    income: [],
    sum: [],
    labels: []
  };

  mapData = () => {
    data.datasets[0].data = this.state.income;
    data.datasets[1].data = this.state.outcome;
    data.datasets[2].data = this.state.sum;
    data.labels = this.state.labels;
    return data;
  };

  componentWillReceiveProps({ records, start, end }) {
    console.log(start);
    if (records && records.length > 0) {
      let i = 0,
        j = 0,
        d = 0;
      start = new Date(start);
      end = new Date(end);
      const labels = [],
        outcome = [],
        sum = [],
        income = [];
      let tempDate,
        tempSum = 0,
        enter = false;
      while (start <= end) {
        tempDate = start.toLocaleDateString();
        outcome[i] = 0;
        income[i] = 0;
        while (records[j] && tempDate === records[j].date) {
          enter = true;
          if (!sum[d]) {
            sum[d] = {
              x: tempDate,
              y: tempSum
            };
          }
          if (records[j].money >= 0) {
            income[i] += records[j].money;
          } else {
            outcome[i] += records[j].money;
          }
          tempSum += records[j].money;
          sum[d].y = tempSum;
          j++;
        }
        if (enter) {
          d++;
          enter = false;
        }

        labels[i] = tempDate;
        start.setDate(start.getDate() + 1);
        i++;
      }
      this.setState({
        outcome,
        income,
        sum,
        labels
      });
    }
  }

  render() {
    return (
      <div>
        <Bar data={this.mapData()} height={200} options={options} />
      </div>
    );
  }
}

const mapStateToProps = ({ review }) => ({
  records: review.records,
  start: review.start,
  end: review.end
});

export default connect(
  mapStateToProps,
  null
)(BarChart);
