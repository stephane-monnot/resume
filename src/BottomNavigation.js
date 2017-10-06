/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import SettingsIcon from 'material-ui-icons/Settings';
// import Scrollspy from 'react-scrollspy';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
  link: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }
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

      //<Scrollspy rootEl="div" items={['Resume-home', 'Resume-work', 'Resume-education', 'Resume-skills']}
      //           currentClassName="is-current">
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >


          <BottomNavigationButton className={classes.link} href="#Resume-home" label="Home" icon={<HomeIcon />} />
          <BottomNavigationButton className={classes.link} href="#Resume-work" label="Work" icon={<WorkIcon />} />
          <BottomNavigationButton className={classes.link} href="#Resume-education" label="Education"
                                  icon={<SchoolIcon />} />
          <BottomNavigationButton className={classes.link} href="#Resume-skills" label="Skills"
                                  icon={<SettingsIcon />} />

        </BottomNavigation>
      // </Scrollspy>

    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);