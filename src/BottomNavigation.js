/* eslint-disable flowtype/require-valid-file-annotation */

import React from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import WorkIcon from 'material-ui-icons/Work';
import SettingsIcon from 'material-ui-icons/Settings';
import LanguageIcon from 'material-ui-icons/Language';
import ToysIcon from 'material-ui-icons/Toys';
import Scrollspy from './ScrollSpy';
import translate from './i18n/Translate';

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
    label: 'home',
    id: 'Resume-home',
    icon: <HomeIcon />,
  },
  {
    label: 'workExperienceAndEducation',
    id: 'Resume-work',
    icon: <WorkIcon />,
  },
  {
    label: 'skills',
    id: 'Resume-skills',
    icon: <SettingsIcon />,
  },
  {
    label: 'languages',
    id: 'Resume-languages',
    icon: <LanguageIcon />,
  },
  {
    label: 'hobbies',
    id: 'Resume-hobbies',
    icon: <ToysIcon />,
  },
];

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0,
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  };

  static propTypes = {
    strings: PropTypes.object
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleChange = (event, value) => {
    this.setState((state) => ({...state, value}));
  };

  handleResize = (event) => {
    this.setState((state) => ({
      ...state,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth}
    ));
  }

  handleSpy = (item) => {
    if (typeof item !== 'undefined') {
      const value = buttons.findIndex(x => x.id === item.id);
      this.setState((state) => ({...state, value}));
    }
  };

  render() {
    const classes = this.props.classes;
    const { value, windowWidth, windowHeight } = this.state;

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
            <BottomNavigationButton key={j} className={classes.link} href={'#' + button.id} label={this.props.strings[button.label]}
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

const decorators = flow([
  withStyles(styles),
  translate('SimpleBottomNavigation')
]);

export default decorators(SimpleBottomNavigation);
