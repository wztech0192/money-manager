import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Drawer from '@material-ui/core/Drawer';
import Navigation from './Navigation';

class Header extends Component {
  state = { openNav: false };

  toggleDrawer = () => {
    this.setState(state => ({ openNav: !state.openNav }));
  };

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={this.toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="bottom"
            open={this.state.openNav}
            onClose={this.toggleDrawer}
          >
            <Navigation />
          </Drawer>
          <Typography variant="h6" noWrap id="title">
            {document.title}
          </Typography>

          <div style={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
