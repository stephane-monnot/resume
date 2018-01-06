import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import GridBackground from '../../components/GridBackground/GridBackground';
import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import FadeTransition from '../../components/Transitions/FadeTransition';

import appTheme from '../../theme';
import './ResumeHomeBlock.css';

class ResumeHomeBlock extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false }
  }

  render() {
    const { fade, style, shortFullName, headline } = this.props;
    return (
      <ScreenBlock id="Resume-home" style={style} className="ResumeHomeBlock">
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

        <FadeTransition appear={fade}>
          <div className="ResumeHomeBlock-squares">
            <GridBackground>
              <div style={{ ...appTheme.laravelColor.style }}>
                {appTheme.laravelColor.icon}
              </div>
              <div style={{ ...appTheme.phpColor.style }}>
                {appTheme.phpColor.icon}
              </div>
              <div style={{ ...appTheme.reactColor.style }}>
                {appTheme.reactColor.icon}
              </div>
              <div style={{ ...appTheme.rubyColor.style }}>
                {appTheme.rubyColor.icon}
              </div>
              <div style={{ ...appTheme.javascriptColor.style }}>
                {appTheme.javascriptColor.icon}
              </div>
              <div style={{ ...appTheme.dockerColor.style }}>
                {appTheme.dockerColor.icon}
              </div>
            </GridBackground>
          </div>
        </FadeTransition>
      </ScreenBlock>
    )
  }
};

ResumeHomeBlock.propTypes = {
  headline: PropTypes.string.isRequired,
  shortFullName: PropTypes.string.isRequired,
  style: PropTypes.object,
  fade: PropTypes.bool.isRequired,
};

ResumeHomeBlock.defaultPropTypes = {
  style: {},
};

export default ResumeHomeBlock;
