import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import EntryForm from './Entry/EntryForm';
import { Bar } from 'react-chartjs-2';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';

const data = {
  datasets: [
    {
      data: [2, 3, 4, 5, 6, 7],
      label: 'Income',
      borderWidth: 2,
      backgroundColor: 'rgba(76, 175, 80,0.3)',
      borderColor: '#4caf50',
      type: 'bar'
    },
    {
      data: [-2, -10, -3, -4, -2, -6, -1],
      label: 'Spending',
      borderWidth: 2,
      backgroundColor: 'rgba(244, 67, 54, 0.3)',
      borderColor: '#f44336',
      type: 'bar'
    },
    {
      data: [3, -5, -2, 7, 10, -6, -1],
      label: 'Sum',
      borderWidth: 2,
      backgroundColor: 'rgba(63, 81, 181,0.6)',
      borderColor: '#3f51b5',
      type: 'line',
      fill: false
    }
  ],
  labels: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
};

const options = {
  legend: { display: true, position: 'bottom' },
  scales: {
    xAxes: [
      {
        stacked: true
      }
    ],
    yAxes: [{ stacked: true }]
  },
  maintainAspectRatio: true,
  tooltips: { mode: 'label' }
};

class Home extends Component {
  _handleDateRangeChange = e => {};

  render() {
    return (
      <div>
        <Typography variant="h5" align="center">
          Dashboard
        </Typography>

        <span>Select Date: </span>
        <Flatpickr
          options={{
            mode: 'range',
            minDate: 'today',
            dateFormat: 'Y-m-d'
          }}
          value={null}
        />

        <Bar data={data} height={200} options={options} />
        <EntryForm />
      </div>
    );
  }
}

export default Home;
