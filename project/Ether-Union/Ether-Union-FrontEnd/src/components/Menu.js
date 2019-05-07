import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginTop: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 3,
    "background-color": "#2a439b",
  },
});

class Menu extends React.Component {
  state = {
    open: false,
  };


  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Router>
            <Route exact path="/" component={home}/>
            <Route exact path="/game" component={game}/>
            <Route exact path="/demand" component={demand}/>
            <Route exact path="/admin" component={admin}/>
          </Router>
        </Paper>
      </div>
    );
  }
}

class game extends Component {
  render() {
      return (
      <div>
      <MenuList>
        <MenuItem>ADMIN GROUPS</MenuItem>
        <MenuItem>DEMANDS</MenuItem>
      </MenuList>
        </div >
    )
  }
}

class demand extends Component {
  render() {
      return (
      <div>
      <MenuList>
        <MenuItem>PLAY</MenuItem>
        <MenuItem>DEMANDS</MenuItem>
      </MenuList>
        </div >
    )
  }
}

class admin extends Component {
  render() {
      return (
      <div>
      <MenuList>
        <MenuItem>ADMIN GROUPS</MenuItem>
        <MenuItem>PLAY</MenuItem>
      </MenuList>
        </div >
    )
  }
}

class home extends Component {
  render() {
    return (
      <div>
      <MenuList>
        <MenuItem>ADMIN GROUPS</MenuItem>
        <MenuItem>PLAY</MenuItem>
        <MenuItem>DEMANDS</MenuItem>
      </MenuList>
        </div >
    )
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
