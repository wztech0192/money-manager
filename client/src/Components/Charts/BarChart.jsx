import React, { PureComponent } from 'react';
import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import { dateFormat } from 'tools/params';

const options = {
  legend: { display: true, position: 'bottom' },
  scales: {
    xAxes: [
      {
        stacked: true,
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10
        },
        scaleLabel: {
          display: true
        }
      }
    ],
    yAxes: [
      {
        stacked: true,
        ticks: {
          autoSkip: true,
          maxTicksLimit: 7,
          userCallback: function(value) {
            return '$ ' + value;
          }
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
      backgroundColor: 'rgba(63, 81, 181,0.05)',
      borderColor: '#3f51b5',
      type: 'line',
      fill: true
    }
  ],
  labels: []
};

export class BarChart extends PureComponent {
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
    start = moment(start, dateFormat);
    end = moment(end, dateFormat);
    const labels = [];
    const outcome = [];
    const sum = [];
    const income = [];
    let tempDate;
    let tempSum = 0;
    const format = 'M/D/YYYY';
    for (let i = 0; start <= end; i++) {
      tempDate = start.format(format);
      outcome.push(0);
      income.push(0);
      labels.push(tempDate);
      if (records[tempDate]) {
        const newSum = {
          x: tempDate,
          y: tempSum
        };
        for (let el of records[tempDate]) {
          if (el.money >= 0) {
            income[i] += el.money;
          } else {
            outcome[i] += el.money;
          }
          tempSum += el.money;
          newSum.y = tempSum;
        }
        sum.push(newSum);
      }
      start.add(1, 'days');
    }
    this.setState({
      outcome,
      income,
      sum,
      labels
    });
  }

  render() {
    return <Bar data={this.mapData()} height={200} options={options} />;
  }
}

export default BarChart;
