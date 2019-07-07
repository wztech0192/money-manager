import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationIcon from '@material-ui/icons/Notifications';
import InputIcon from '@material-ui/icons/Input';
import ReviewIcon from '@material-ui/icons/Assessment';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  selected: {
    '& div': {
      color: theme.palette.primary.main
    }
  }
}));

const navList = [
  {
    label: 'Dashboard',
    Icon: DashboardIcon,
    link: '/'
  },
  {
    label: 'Entry',
    Icon: InputIcon,
    link: '/Entry'
  },
  {
    label: 'Review',
    Icon: ReviewIcon,
    link: '/Review'
  },
  {
    label: 'Notifications',
    Icon: NotificationIcon,
    link: '/Notifications'
  }
];

export default () => {
  const classes = useStyles();
  return (
    <List>
      {navList.map(({ label, Icon, link }, index) => (
        <ListItem
          button
          to={link}
          key={index}
          exact
          component={React.forwardRef((props, ref) => (
            <NavLink {...props} />
          ))}
          activeClassName={classes.selected}
        >
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
      ))}
    </List>
  );
};
