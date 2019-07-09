import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default ({ classes, onSubmitRecord, onClearRecord }) => (
  <Grid container className={classes.btnGrid}>
    <Grid item xs={6}>
      <Button color="primary" fullWidth onClick={onSubmitRecord}>
        Submit
      </Button>
    </Grid>
    <Grid item xs={6}>
      <Button color="secondary" fullWidth onClick={onClearRecord}>
        Clear
      </Button>
    </Grid>
  </Grid>
);
