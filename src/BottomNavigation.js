/* eslint-disable flowtype/require-valid-file-annotation */
import Scroll from 'react-scroll';
import React from 'react';
import PropTypes from 'prop-types';
import flow from 'lodash/flow';
import { injectIntl, intlShape } from 'react-intl';
import { withStyles } from 'material-ui/styles';
import BottomNavigation from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import WorkIcon from 'material-ui-icons/Work';
import SchoolIcon from 'material-ui-icons/School';
import SettingsIcon from 'material-ui-icons/Settings';
import LanguageIcon from 'material-ui-icons/Language';
import ToysIcon from 'material-ui-icons/Toys';
import CodeIcon from 'material-ui-icons/Code';

let Link = Scroll.Link;

const styles = {
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0
  },
  link: {
    width: '100%',
    minWidth: '60px',
    maxWidth: '168px',
    flex: '1',
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'rgba(0, 0, 0, 0.54)',
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    cursor: 'pointer',
    outline: 'none',
    position: 'relative',
  }
};

var buttons = [
  {
    label: 'SimpleBottomNavigation.home',
    name: 'Resume-home',
    icon: <HomeIcon />
  },
  {
    label: 'SimpleBottomNavigation.workExperience',
    name: 'Resume-work',
    icon: <WorkIcon />,
    offset: -64
  },
  {
    label: 'SimpleBottomNavigation.education',
    name: 'Resume-education',
    icon: <SchoolIcon />,
    offset: -64

  },
  {
    label: 'SimpleBottomNavigation.skills',
    name: 'Resume-skills',
    icon: <SettingsIcon />,
    offset: -64
  },
  {
    label: 'SimpleBottomNavigation.languages',
    name: 'Resume-languages',
    icon: <LanguageIcon />,
    offset: -64
  },
  {
    label: 'SimpleBottomNavigation.hobbies',
    name: 'Resume-hobbies',
    icon: <ToysIcon />,
    offset: -64
  },
  {
    label: 'SimpleBottomNavigation.projects',
    name: 'Resume-projects',
    icon: <CodeIcon />,
    offset: -64
  },
];

class SimpleBottomNavigation extends React.Component {
  render() {
    const classes = this.props.classes;
    const { formatMessage } = this.props.intl;

    return (

      <BottomNavigation
        value="0"
        className={classes.root}
      >
        {buttons.map((button, j) =>
          <Link key={j} className={classes.link} to={button.name}
                activeClass="active" spy={true} smooth={true} offset={button.offset} duration={500}>
            {button.icon}
            {formatMessage({ id: button.label })}
          </Link>
        )}
      </BottomNavigation>

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
