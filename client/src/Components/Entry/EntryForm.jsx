import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { DateTimePicker } from '@material-ui/pickers';

import CalenderIcon from '@material-ui/icons/CalendarToday';
import Fab from '@material-ui/core/Fab';
import HearIcon from '@material-ui/icons/Hearing';
import TypeSelector from './TypeSelector';
import NumberMask from '../Utilities/NumberMask';
import { connect } from 'react-redux';
import {
  onSelectType,
  onSelectTab
} from '../../stores/recordStore/recordAction';

const mapStateToProps = state => {
  const { selectTab, selectType } = state.record;
  return {
    selectTab,
    selectType
  };
};
console.log(onSelectTab);
const mapDispatchToProps = { onSelectType, onSelectTab };

class EntryForm extends Component {
  render() {
    const {
      classes,
      selectTab,
      selectType,
      onSelectType,
      onSelectTab
    } = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Paper square>
            <Tabs
              aria-label="select income or outcome"
              value={selectTab}
              onChange={onSelectTab}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Out" />
              <Tab label="In" />
            </Tabs>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper square className={classes.entryContainer}>
            <Grid container>
              <Grid item xs={12}>
                <TypeSelector
                  aria-label="select outcome/income type"
                  classes={classes}
                  selectedType={selectType}
                  onSelectType={onSelectType}
                />
              </Grid>
              <Grid item xs={12} className={classes.inputGrid}>
                <DateTimePicker
                  disablePast
                  aria-label="date input"
                  label="Date"
                  showTodayButton
                  inputVariant="outlined"
                  InputProps={{
                    endAdornment: <CalenderIcon color="action" />
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={9} className={classes.inputGrid}>
                <TextField
                  aria-label="money input"
                  className={classes.formControl}
                  variant="outlined"
                  label="Money"
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
              <Grid item xs={3} className={classes.fab}>
                <Fab size="small" aria-label="click to read all inputs">
                  <HearIcon />
                </Fab>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Notes (Optional)" fullWidth multiline />
              </Grid>
              <Grid container className={classes.btnGrid}>
                <Grid item xs={6}>
                  <Button color="primary" fullWidth>
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button color="secondary" fullWidth>
                    Clear
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const style = theme => ({
  fab: {
    textAlign: 'center',
    paddingTop: 15
  },
  entryContainer: {
    padding: 10
  },
  inputGrid: { padding: '10px 0' },
  input: {
    textAlign: 'right'
  },
  btnGrid: {
    paddingTop: 20
  },
  chip: {
    margin: 3
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(EntryForm));
