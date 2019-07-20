import React, { PureComponent } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import FormFields from './FormFields';
import TypeSelector from './TypeSelector';
import FormActions from './FormActions';
import { connect } from 'react-redux';
import OutIcon from '@material-ui/icons/MoneyOff';
import InIcon from '@material-ui/icons/MonetizationOn';
import style from './EntryStyle';
import {
  onSelectTab,
  onSubmitRecord,
  onClearRecord
} from 'stores/actions/recordAction';

const mapStateToProps = ({ record }) => ({
  selectTab: record.selectTab
});
const mapDispatchToProps = { onSelectTab, onSubmitRecord, onClearRecord };

class EntryForm extends PureComponent {
  render() {
    const {
      classes,
      selectTab,
      onSelectTab,
      onSubmitRecord,
      onClearRecord
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
              <Tab label="Out" icon={<OutIcon />} />
              <Tab label="In" icon={<InIcon />} />
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
                />
              </Grid>
              <Grid item xs={12}>
                <FormFields aria-label="all form fields" classes={classes} />
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
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(EntryForm));
