import React from 'react';
import Scroll from 'react-scroll';
import { FormattedMessage } from 'react-intl';
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

let Link = (props) => {
  const { showLabel, ...rest } = props;
  return (
    <div>
      <Scroll.Link {...rest} />
    </div>
  );
};

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
    label: 'SimpleBottomNavigation.projects',
    name: 'Resume-projects',
    icon: <CodeIcon />,
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
];

const SimpleBottomNavigation = () => (
  <BottomNavigation
    value="0"
    className="BottomNavigation"
  >
    {buttons.map((button, j) =>
      <Link key={j} className="BottomNavigation-link" to={button.name}
            activeClass="active" spy={true} smooth={true} offset={button.offset} duration={500}>
        {button.icon}
        <FormattedMessage id={button.label} />
      </Link>
    )}
  </BottomNavigation>
);

export default SimpleBottomNavigation;
