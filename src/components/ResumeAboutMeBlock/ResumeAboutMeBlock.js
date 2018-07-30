import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

import './ResumeAboutMeBlock.css';

const ResumeAboutMeBlock = ({
  style,
  fullName,
  headline,
  summary,
  pictureUrl,
  resumeUrl,
}) => {
  let pictureSrc = pictureUrl;
  if (!/^https?:\/\//i.test(pictureUrl)) {
    pictureSrc = require(`../../data/img/${pictureUrl}`); // eslint-disable-line global-require
  }

  return (
    <ScreenBlock
      id="Resume-aboutMe"
      style={style}
      className="ResumeAboutMeBlock"
    >
      <div className="container">
        <div className="heading">
          <h2>
            <FormattedMessage id="Resume.aboutMe" defaultMessage="About me" />
          </h2>
          <p>
            <FormattedMessage
              id="Resume.aboutMeSubtitle"
              defaultMessage="A small introduction about myself"
            />
          </p>
        </div>

        <div className="ResumeAboutMeBlock-content">
          <div className="ResumeAboutMeBlock-description">
            <h3>{fullName}</h3>
            <h4>{headline}</h4>

            <p
              className="Resume-summary"
              dangerouslySetInnerHTML={{ __html: summary }} // eslint-disable-line react/no-danger
            />

            <br />
            <br />

            <div className="ResumeAboutMeBlock-links">
              <Button
                variant="contained"
                color="primary"
                target="_blank"
                href={resumeUrl}
              >
                <FormattedMessage
                  id="Resume.download"
                  defaultMessage="Download"
                />
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                href="mailto:monnot.stephane@gmail.com"
                variant="contained"
                color="secondary"
              >
                <FormattedMessage id="Resume.hireMe" defaultMessage="Hire me" />
              </Button>
            </div>
          </div>

          <div className="ResumeAboutMeBlock-profilePicture Resume-profilePicture">
            <img alt="" src={pictureSrc} />
          </div>
        </div>
      </div>
    </ScreenBlock>
  );
};

ResumeAboutMeBlock.propTypes = {
  style: PropTypes.object,
  fullName: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  resumeUrl: PropTypes.string.isRequired,
};

ResumeAboutMeBlock.defaultPropTypes = {
  style: {},
};

export default ResumeAboutMeBlock;
