import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import DotsProgress from '../../components/DotsProgress/DotsProgress';
import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

import './ResumeLanguagesAndHobbiesBlock.css';

const ResumeLanguagesAndHobbiesBlock = ({
  languages,
  hobbies,
  hobbyCardStyle,
}) => (
  <ScreenBlock id="Resume-languages" className="ResumeLanguagesAndHobbiesBlock">
    <div className="container">
      <div className="heading">
        <h2>
          <FormattedMessage id="Resume.languages" defaultMessage="Languages" />
        </h2>
        <p>
          <FormattedMessage
            id="Resume.languagesSubtitle"
            defaultMessage="I speak"
          />
        </p>
      </div>

      <div className="ResumeLanguagesAndHobbiesBlock-languages">
        {languages.map(language => (
          <div
            className="ResumeLanguagesAndHobbiesBlock-language"
            key={language.name}
          >
            <div className="ResumeLanguagesAndHobbiesBlock-languageTitleAndLevel">
              <span className="ResumeLanguagesAndHobbiesBlock-languageTitle">
                {language.name}
              </span>
              <br />
              <span className="ResumeLanguagesAndHobbiesBlock-languageLevel">
                {' '}
                {language.level}
              </span>
            </div>
            <DotsProgress
              maxNumberOfDots={10}
              numberOfActiveDots={language.levelNumber}
            />
          </div>
        ))}
      </div>
    </div>

    <div id="Resume-hobbies">
      <div className="heading">
        <h2>
          <FormattedMessage id="Resume.interests" defaultMessage="Interests" />
        </h2>
        <p>
          <FormattedMessage
            id="Resume.interestsSubtitle"
            defaultMessage="What I like"
          />
        </p>
      </div>
    </div>

    <div className="ResumeLanguagesAndHobbiesBlock-hobbies">
      {hobbies.map(hobby => (
        <div
          key={hobby.name}
          className="ResumeLanguagesAndHobbiesBlock-hobby-container"
        >
          <div className="ResumeLanguagesAndHobbiesBlock-hobby">
            <Card
              style={hobbyCardStyle}
              className="ResumeLanguagesAndHobbiesBlock-hobby-front"
            >
              <CardContent>
                <Icon>{hobby.icon}</Icon>
                <h4>{hobby.name}</h4>
              </CardContent>
            </Card>
            <Card
              key={hobby.name}
              style={hobbyCardStyle}
              className="ResumeLanguagesAndHobbiesBlock-hobby-back"
            >
              <CardContent>
                {hobby.description && (
                  <div className="ResumeLanguagesAndHobbiesBlock-hobby-back-description">
                    {hobby.description}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>
  </ScreenBlock>
);

ResumeLanguagesAndHobbiesBlock.propTypes = {
  languages: PropTypes.array.isRequired,
  hobbies: PropTypes.array.isRequired,
  hobbyCardStyle: PropTypes.object.isRequired,
};

export default ResumeLanguagesAndHobbiesBlock;
