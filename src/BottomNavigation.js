/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import SettingsIcon from 'material-ui-icons/Settings';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const classes = this.props.classes;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationButton href="#Resume-home" label="Home" icon={<HomeIcon />} />
        <BottomNavigationButton href="#Resume-work" label="Work" icon={<WorkIcon />} />
        <BottomNavigationButton href="#Resume-education" label="Education" icon={<SchoolIcon />} />
        <BottomNavigationButton href="#Resume-skills" label="Skills" icon={<SettingsIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);