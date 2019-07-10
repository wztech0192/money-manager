import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import EntryForm from './Entry/EntryForm';

class Home extends Component {
  render() {
    return (
      <div>
        <Typography variant="h5" align="center">
          Dashboard
        </Typography>
        <EntryForm />
      </div>
    );
  }
}

export default Home;
