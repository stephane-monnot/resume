import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import GridBackground from '../../components/GridBackground/GridBackground';
import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import SocialNetworkNavigation from "../../components/SocialNetworkNavigation/SocialNetworkNavigation";

import './ResumeHomeBlock.css';

const ResumeHomeBlock = ({ snAccounts, shortFullName, headline, styles }) => (
  <ScreenBlock id="Resume-home" className="ResumeHomeBlock">
    <div className="ResumeHomeBlock-headline-container">
      <div className="ResumeHomeBlock-headline">
        <h1>
          <FormattedMessage
            id='Resume.im'
            defaultMessage="I'm {fullName}"
            values={{ fullName: shortFullName }}
          />
        </h1>
        <h2>{headline}</h2>
      </div>
    </div>

    <div className="ResumeHomeBlock-sns-container">
      <SocialNetworkNavigation services={snAccounts} />
    </div>

    <div className="ResumeHomeBlock-squares">
      <GridBackground>
        <div style={{ ...styles.laravelColor.style }}>
          {styles.laravelColor.icon}
        </div>
        <div style={{ ...styles.phpColor.style }}>
          {styles.phpColor.icon}
        </div>
        <div style={{ ...styles.reactColor.style }}>
          {styles.reactColor.icon}
        </div>
        <div style={{ ...styles.rubyColor.style }}>
          {styles.rubyColor.icon}
        </div>
        <div style={{ ...styles.javascriptColor.style }}>
          {styles.javascriptColor.icon}
        </div>
        <div style={{ ...styles.dockerColor.style }}>
          {styles.dockerColor.icon}
        </div>
      </GridBackground>
    </div>

  </ScreenBlock>
);

ResumeHomeBlock.propTypes = {
  headline: PropTypes.string.isRequired,
  shortFullName: PropTypes.string.isRequired,
  snAccounts: PropTypes.arrayOf(PropTypes.object).isRequired,
  styles: PropTypes.object.isRequired,
};

export default ResumeHomeBlock;
