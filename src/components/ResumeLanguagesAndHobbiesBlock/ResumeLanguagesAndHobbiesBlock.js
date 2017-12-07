import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Icon from 'material-ui/Icon';
import Card, { CardContent } from 'material-ui/Card';

import DotsProgress from '../../components/DotsProgress/DotsProgress';
import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

import './ResumeLanguagesAndHobbiesBlock.css';

const ResumeLanguagesAndHobbiesBlock = ({ languages, hobbies, hobbyCardStyle }) => (
  <ScreenBlock id="Resume-languages" className="ResumeLanguagesAndHobbiesBlock">
    <div className="container">
      <div className="heading">
        <h2>
          <FormattedMessage
            id='Resume.languages'
            defaultMessage='Languages'
          />
        </h2>
        <p>
          <FormattedMessage
            id='Resume.languagesSubtitle'
            defaultMessage='I speak'
          />
        </p>
      </div>

      <div className="ResumeLanguagesAndHobbiesBlock-languages">
        {languages.map((language, i) =>
          <div className="ResumeLanguagesAndHobbiesBlock-language" key={i}>
            <div className="ResumeLanguagesAndHobbiesBlock-languageTitleAndLevel">
              <span className="ResumeLanguagesAndHobbiesBlock-languageTitle">{language.name}</span><br />
              <span className="ResumeLanguagesAndHobbiesBlock-languageLevel"> {language.level}</span>
            </div>
            <DotsProgress maxNumberOfDots={10} numberOfActiveDots={language.levelNumber} />
          </div>
        )}
      </div>
    </div>

    <div id="ResumeLanguagesAndHobbiesBlock-hobbies">
      <div className="heading">
        <h2>
          <FormattedMessage
            id='Resume.interests'
            defaultMessage='Interests'
          />
        </h2>
        <p>
          <FormattedMessage
            id='Resume.interestsSubtitle'
            defaultMessage='What I like'
          />
        </p>
      </div>
    </div>

    <div className="ResumeLanguagesAndHobbiesBlock-hobbies">
      {hobbies.map((hobby, i) =>
        <Card key={i} style={hobbyCardStyle} className="ResumeLanguagesAndHobbiesBlock-hobby">
          <CardContent>
            <Icon>{hobby.icon}</Icon>
            <h4>{hobby.name}</h4>
          </CardContent>
        </Card>
      )}
    </div>
  </ScreenBlock>
);

ResumeLanguagesAndHobbiesBlock.propTypes = {
  languages: PropTypes.array.isRequired,
  hobbies: PropTypes.array.isRequired,
  hobbyCardStyle: PropTypes.object.isRequired,
};

export default ResumeLanguagesAndHobbiesBlock;
