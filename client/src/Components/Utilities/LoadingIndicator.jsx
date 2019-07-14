import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(() => ({
  progress: {
    margin: '0 auto'
  },
  loadingContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    display: 'flex',
    alignItems: 'center',
    zIndex: 1000,
    backgroundColor: 'rgba(0,0,0,0.05)'
  }
}));

export default ({ size, hide }) => {
  const classes = useStyles();

  return (
    <Fade in={!hide}>
      <div className={classes.loadingContainer}>
        <CircularProgress className={classes.progress} size={size} />
      </div>
    </Fade>
  );
};
