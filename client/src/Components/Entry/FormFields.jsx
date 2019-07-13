import React, { PureComponent } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { DateTimePicker } from '@material-ui/pickers';
import AddPhotoIcon from '@material-ui/icons/AddPhotoAlternate';
import CalenderIcon from '@material-ui/icons/WatchLater';
import Fab from '@material-ui/core/Fab';
import HearIcon from '@material-ui/icons/Hearing';
import { NumberMask } from '../Utilities/InputMask';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {
  onEnterRecordMoney,
  onEnterRecordDate,
  onEnterRecordSummary
} from '../../stores/actions/recordAction';

const mapStateToProps = ({ record }) => ({
  recordSummary: record.recordSummary,
  recordMoney: record.recordMoney,
  recordDate: record.recordDate,
  recordErrors: record.recordErrors
});

const mapDispatchToProps = {
  onEnterRecordMoney,
  onEnterRecordDate,
  onEnterRecordSummary
};

class FormField extends PureComponent {
  render() {
    const {
      onEnterRecordMoney,
      onEnterRecordDate,
      onEnterRecordSummary,
      recordSummary,
      recordMoney,
      recordDate,
      recordErrors,
      classes
    } = this.props;

    return (
      <Grid container>
        <Grid item xs={7} className={classes.inputGrid}>
          <DateTimePicker
            value={recordDate}
            onChange={onEnterRecordDate}
            aria-label="date input"
            label="Date"
            showTodayButton
            inputVariant="outlined"
            InputProps={{
              classes: {
                input: classes.input
              },
              startAdornment: <CalenderIcon color="action" />
            }}
            fullWidth
          />
        </Grid>
        <Grid item xs={5} className={classes.Fab}>
          <Fab size="medium" aria-label="click to add image to the record">
            <AddPhotoIcon />
          </Fab>
        </Grid>

        <Grid item xs={7} className={classes.inputGrid}>
          <TextField
            aria-label="money input"
            className={classes.formControl}
            variant="outlined"
            label="Amount"
            placeholder="0.00"
            value={recordMoney}
            error={!!recordErrors.money}
            helperText={recordErrors.money}
            onBlur={onEnterRecordMoney}
            InputProps={{
              classes: {
                input: classes.input
              },
              inputComponent: NumberMask,
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
            fullWidth
          />
        </Grid>

        <Grid item xs={5} className={classes.Fab}>
          <Fab size="medium" aria-label="click to read all inputs">
            <HearIcon />
          </Fab>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Note (Optional)"
            fullWidth
            multiple
            value={recordSummary}
            onChange={onEnterRecordSummary}
          />
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormField);
