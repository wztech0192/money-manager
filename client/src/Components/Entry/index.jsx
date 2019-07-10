import React from 'react';
import EntryForm from './EntryForm';
import Typography from '@material-ui/core/Typography';

export default () => (
  <div>
    <div className="max-width">
      <Typography align="center" variant="h5" gutterBottom>
        Record Entry
      </Typography>
      <EntryForm />
    </div>
  </div>
);
