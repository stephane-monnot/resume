import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';

import appTheme from '../../theme';
import './ResumeSkillsBlock.css';

const ResumeSkillsBlock = ({ skills, tools }) => (
  <ScreenBlock id="Resume-skills" className="ResumeSkillsBlock">
    <div className="container">
      <div className="heading">
        <h2>
          <FormattedMessage id="Resume.skills" defaultMessage="Skills" />
        </h2>
        <p>
          <FormattedMessage
            id="Resume.skillsSubtitle"
            defaultMessage="I can say i’m quite good at"
          />
        </p>
      </div>

      <div className="ResumeSkillsBlock-skills">
        {skills.map((skillCategory, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={i}>
            <CardContent>
              <Avatar
                style={{
                  ...appTheme[`${skillCategory[0].language.style}Color`].style,
                  width: 100,
                  height: 100,
                  margin: '0 auto',
                }}
              >
                {appTheme[`${skillCategory[0].language.style}Color`].icon}
              </Avatar>
              <h3
                style={{
                  color:
                    appTheme[`${skillCategory[0].language.style}Color`].style
                      .background,
                }}
              >
                {skillCategory[0].language.name}
              </h3>
              {skillCategory.map((skill, j) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={j}>{skill.name}</div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <br />

      <div className="heading">
        <h2>
          <FormattedMessage id="Resume.tools" defaultMessage="Tools" />
        </h2>
        <p>
          <FormattedMessage
            id="Resume.toolsSubtitle"
            defaultMessage="My favorites tools"
          />
        </p>
      </div>

      <div className="ResumeSkillsBlock-tools">
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={{ __html: tools }} />
      </div>
    </div>
  </ScreenBlock>
);

ResumeSkillsBlock.propTypes = {
  skills: PropTypes.array.isRequired,
  tools: PropTypes.string.isRequired,
};

export default ResumeSkillsBlock;
