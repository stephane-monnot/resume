/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import { injectIntl, intlShape } from 'react-intl';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import WorkIcon from 'material-ui-icons/Work';
import SchoolIcon from 'material-ui-icons/School';
import SettingsIcon from 'material-ui-icons/Settings';
import LanguageIcon from 'material-ui-icons/Language';
import ToysIcon from 'material-ui-icons/Toys';
import CodeIcon from 'material-ui-icons/Code';
import Scrollspy from './ScrollSpy';

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
  link: {
    width: '100%',
    minWidth: '60px',
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }
};

var buttons = [
  {
    label: 'SimpleBottomNavigation.home',
    id: 'Resume-home',
    icon: <HomeIcon />,
  },
  {
    label: 'SimpleBottomNavigation.workExperience',
    id: 'Resume-work',
    icon: <WorkIcon />,
  },
  {
    label: 'SimpleBottomNavigation.education',
    id: 'Resume-education',
    icon: <SchoolIcon />,
  },
  {
    label: 'SimpleBottomNavigation.skills',
    id: 'Resume-skills',
    icon: <SettingsIcon />,
  },
  {
    label: 'SimpleBottomNavigation.languages',
    id: 'Resume-languages',
    icon: <LanguageIcon />,
  },
  {
    label: 'SimpleBottomNavigation.hobbies',
    id: 'Resume-hobbies',
    icon: <ToysIcon />,
  },
  {
    label: 'SimpleBottomNavigation.projects',
    id: 'Resume-projects',
    icon: <CodeIcon />,
  },
];

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState((state) => ({...state, value}));
  };

  handleSpy = (item) => {
    if (typeof item !== 'undefined') {
      const value = buttons.findIndex(x => x.id === item.id);
      this.setState((state) => ({...state, value}));
    }
  };

  render() {
    const classes = this.props.classes;
    const { value } = this.state;
    const { formatMessage } = this.props.intl;

    return (

      <Scrollspy onUpdate={this.handleSpy} items={buttons.map(function(a) {return a.id;})}
                 currentClassName="is-current">
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.root}
        >
          {buttons.map((button, j) =>
            <BottomNavigationButton
              key={j}
              className={classes.link}
              href={'#' + button.id}
              label={formatMessage({id: button.label})}
              icon={button.icon}
            />
          )}
        </BottomNavigation>
      </Scrollspy>

    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

const decorators = flow([
  withStyles(styles),
  injectIntl
]);

export default decorators(SimpleBottomNavigation);
