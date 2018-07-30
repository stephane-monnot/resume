import React from 'react';
import PropTypes from 'prop-types';
import GithubIcon from 'react-icons/lib/fa/github';
import LinkedinIcon from 'react-icons/lib/fa/linkedin-square';

import './SocialNetworkNavigation.css';

const icons = {
  github: {
    element: <GithubIcon />,
  },
  linkedin: {
    element: <LinkedinIcon />,
  },
};

const SocialNetworkNavigation = ({ services }) => (
  <div className="SocialNetworkNavigation">
    {services.map(service => (
      <a
        target="_blank"
        key={service.url}
        className={`SocialNetworkNavigation-link social-${service.icon}`}
        href={service.url}
      >
        {icons[service.icon].element}
      </a>
    ))}
  </div>
);

SocialNetworkNavigation.propTypes = {
  services: PropTypes.array.isRequired,
};

export default SocialNetworkNavigation;
