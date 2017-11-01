/* eslint-disable flowtype/require-valid-file-annotation */
import Scroll from 'react-scroll';
import React from 'react';
import flow from 'lodash/flow';
import { injectIntl, intlShape } from 'react-intl';
import BottomNavigation from 'material-ui/BottomNavigation';
import HomeIcon from 'material-ui-icons/Home';
import WorkIcon from 'material-ui-icons/Work';
import FaceIcon from 'material-ui-icons/Face';
import SchoolIcon from 'material-ui-icons/School';
import SettingsIcon from 'material-ui-icons/Settings';
import LanguageIcon from 'material-ui-icons/Language';
import ToysIcon from 'material-ui-icons/Toys';
import CodeIcon from 'material-ui-icons/Code';

import './BottomNavigation.css';

let Link = Scroll.Link;


var buttons = [
  {
    label: 'SimpleBottomNavigation.home',
    name: 'Resume-home',
    icon: <HomeIcon />
  },
  {
    label: 'SimpleBottomNavigation.aboutMe',
    name: 'Resume-aboutMe',
    icon: <FaceIcon />,
  },
  {
    label: 'SimpleBottomNavigation.workExperience',
    name: 'Resume-work',
    icon: <WorkIcon />,
  },
  {
    label: 'SimpleBottomNavigation.education',
    name: 'Resume-education',
    icon: <SchoolIcon />,
    offset: -16

  },
  {
    label: 'SimpleBottomNavigation.skills',
    name: 'Resume-skills',
    icon: <SettingsIcon />,
  },
  {
    label: 'SimpleBottomNavigation.languages',
    name: 'Resume-languages',
    icon: <LanguageIcon />,
  },
  {
    label: 'SimpleBottomNavigation.hobbies',
    name: 'Resume-hobbies',
    icon: <ToysIcon />,
  },
  {
    label: 'SimpleBottomNavigation.projects',
    name: 'Resume-projects',
    icon: <CodeIcon />,
  },
];

class SimpleBottomNavigation extends React.Component {
  render() {
    const { formatMessage } = this.props.intl;

    return (

      <BottomNavigation
        value="0"
        className="BottomNavigation"
      >
        {buttons.map((button, j) =>
          <Link key={j} className="BottomNavigation-link" to={button.name}
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
  intl: intlShape.isRequired
};

const decorators = flow([
  injectIntl
]);

export default decorators(SimpleBottomNavigation);
