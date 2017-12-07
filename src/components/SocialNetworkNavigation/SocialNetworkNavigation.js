import React from 'react';
import GithubIcon from 'react-icons/lib/fa/github';
import LinkedinIcon from 'react-icons/lib/fa/linkedin-square';

import './SocialNetworkNavigation.css';

const icons = {
  'github': <GithubIcon />,
  'linkedin': <LinkedinIcon />,
};

const SocialNetworkNavigation = ({ services }) => (
  <div className="SocialNetworkNavigation">
    {services.map((service, j) =>
      <a target="_blank" key={j} className="SocialNetworkNavigation-link" href={service.url}>
        {icons[service.icon]}
      </a>
    )}
  </div>
);

export default SocialNetworkNavigation;
