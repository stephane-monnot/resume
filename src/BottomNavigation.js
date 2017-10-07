/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import SettingsIcon from 'material-ui-icons/Settings';
import Scrollspy from './ScrollSpy';

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

var buttons = [
  {
    label: 'Home',
    id: 'Resume-home',
    icon: <HomeIcon />,
  },
  {
    label: 'Work',
    id: 'Resume-work',
    icon: <WorkIcon />,
  },
  {
    label: 'Education',
    id: 'Resume-education',
    icon: <SchoolIcon />,
  },
  {
    label: 'Skills',
    id: 'Resume-skills',
    icon: <SettingsIcon />,
  },
];

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleSpy = (item) => {
    if (typeof item !== 'undefined') {
      const value = buttons.findIndex(x => x.id == item.id);
      this.setState({ value });
    }
  };

  render() {
    const classes = this.props.classes;
    const { value } = this.state;

    return (

      <Scrollspy onUpdate={this.handleSpy} items={['Resume-home', 'Resume-work', 'Resume-education', 'Resume-skills']}
                 currentClassName="is-current">
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          {buttons.map((button, j) =>
            <BottomNavigationButton key={j} className={classes.link} href={'#' + button.id} label={button.label}
                                    icon={button.icon} />
          )}
        </BottomNavigation>
      </Scrollspy>

    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleBottomNavigation);