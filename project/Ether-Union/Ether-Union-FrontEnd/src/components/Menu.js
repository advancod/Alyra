import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    "text-shadow": "white 1px 1px 1px"
  },
});

class  Menu extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Router>
            <Route exact path="/" component={game}/>
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
      <MenuList>
        <MenuItem><a href="/admin">ADMINS</a></MenuItem>
        <MenuItem><a href="/demand">DEMAND</a></MenuItem>
      </MenuList>
    )
  }
}

class demand extends Component {
  render() {
      return (

      <MenuList>
        <MenuItem><a href="/">GAME</a></MenuItem>
        <MenuItem><a href="/admin">ADMIN</a></MenuItem>
      </MenuList>

    )
  }
}

class admin extends Component {
  render() {
      return (

      <MenuList>
        <MenuItem><a href="/demand">DEMANDS</a></MenuItem>
        <MenuItem><a href="/">GAME</a></MenuItem>
      </MenuList>

    )
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);
