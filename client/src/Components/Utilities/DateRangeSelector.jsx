import React, { PureComponent } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Popover from '@material-ui/core/Popover';

const defaultRange = [
  moment()
    .subtract(6, 'days')
    .format('MM/DD/YYYY'),
  moment().format('MM/DD/YYYY')
];

export class DateRangeSelector extends PureComponent {
  state = {
    range: defaultRange,
    selected: 'Last 7 Days',
    label: `\t\t${defaultRange[0]} - ${defaultRange[1]}`,
    open: false
  };

  anchorEl = React.createRef();
  inputLabel = React.createRef();

  rangeOptions = {
    Today: () => {
      const start = moment();
      const end = start;
      return [start, end];
    },
    'This Week': () => [moment().startOf('week'), moment().endOf('week')],
    'Last 7 Days': () => [moment().subtract(6, 'days'), moment()],
    'This Month': () => [moment().startOf('month'), moment().endOf('month')],
    'Last Month': () => {
      const start = moment()
        .subtract(1, 'months')
        .startOf('month');
      const end = start.clone().endOf('month');
      return [start, end];
    },
    'Last 30 Days': () => [moment().subtract(29, 'days'), moment()],
    'Last 180 Days': () => [
      moment().subtract(179, 'days'),
      moment().endOf('week')
    ],
    'This Year': () => [moment().startOf('year'), moment().endOf('year')],
    'Last Year': () => {
      const start = moment()
        .subtract(1, 'years')
        .startOf('year');
      const end = start.clone().endOf('year');
      return [start, end];
    }
  };

  onDisplay = () => {
    this.props.onDateChange(this.state.start, this.state.end);
  };

  toggleMenu = () => {
    this.setState(state => ({ open: !state.open }));
  };

  onCalenderSelect = range => {
    if (range.length > 1) {
      const formattedRange = [
        range[0].toLocaleDateString(),
        range[1].toLocaleDateString()
      ];
      this.setState({
        range: formattedRange,
        selected: 'Customize Range',
        label: `\t\t${formattedRange[0]} - ${formattedRange[1]}`,
        open: false
      });
      this.props.onDateChange(formattedRange);
    }
  };

  rangeChange = e => {
    const selected = e.target.textContent;
    const range = this.rangeOptions[selected]();
    range[0] = range[0].format('MM/DD/YYYY');
    range[1] = range[1].format('MM/DD/YYYY');
    if (range) {
      this.setState({
        range,
        selected,
        label: `\t\t${range[0]} - ${range[1]}`,
        open: false
      });
      this.props.onDateChange(range);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TextField
          ref={this.anchorEl}
          label="Select Date Range"
          margin="normal"
          variant="outlined"
          value={this.state.selected + this.state.label}
          onClick={this.toggleMenu}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <Popover
          open={this.state.open}
          anchorEl={this.anchorEl.current}
          onClose={this.toggleMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center'
          }}
        >
          <Typography className={classes.typography}>
            {Object.keys(this.rangeOptions).map((val, i) => (
              <MenuItem
                selected={val === this.state.selected}
                value={val}
                key={i}
                onClick={this.rangeChange}
              >
                {val}
              </MenuItem>
            ))}
            <Flatpickr
              className={classes.calender}
              options={{
                mode: 'range',
                dateFormat: 'm/d/Y',
                inline: true,
                defaultDate: this.state.range
              }}
              onChange={this.onCalenderSelect}
            />
          </Typography>
        </Popover>
      </div>
    );
  }
}

const style = () => ({
  root: {
    position: 'relative'
  },
  calender: {
    display: 'none'
  },
  rangeLabel: {
    marginTop: -47,
    right: 50,
    position: 'absolute',
    zIndex: -1
  }
});

export default withStyles(style)(DateRangeSelector);
