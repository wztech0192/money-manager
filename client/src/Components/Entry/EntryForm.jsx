import React, { Component } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormFields from './FormFields';
import TypeSelector from './TypeSelector';
import FormActions from './FormActions';
import { connect } from 'react-redux';
import * as recordActions from '../../stores/recordStore/recordAction';

const mapStateToProps = ({ record }) => record;
const mapDispatchToProps = recordActions;

class EntryForm extends Component {
  render() {
    const {
      classes,
      selectTab,
      onSelectTab,
      onSelectType,
      selectType,
      onSubmitRecord,
      onClearRecord,
      onEnterRecordMoney,
      onEnterRecordDate,
      onEnterRecordSummary,
      recordSummary,
      recordMoney,
      recordDateTime
    } = this.props;
    return (
      <div className="container">
        <div className="max-width">
          <Typography align="center" variant="h5" gutterBottom>
            Record Entry
          </Typography>
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
                      onSelectType={onSelectType}
                      selectType={selectType}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormFields
                      aria-label="all form fields"
                      classes={classes}
                      onEnterRecordMoney={onEnterRecordMoney}
                      onEnterRecordDate={onEnterRecordDate}
                      onEnterRecordSummary={onEnterRecordSummary}
                      recordSummary={recordSummary}
                      recordMoney={recordMoney}
                      recordDateTime={recordDateTime}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormActions
                      aria-label="all form actions such as submit and clear"
                      classes={classes}
                      onSubmitRecord={onSubmitRecord}
                      onClearRecord={onClearRecord}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const style = () => ({
  Fab: {
    textAlign: 'center',
    marginTop: 10
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
