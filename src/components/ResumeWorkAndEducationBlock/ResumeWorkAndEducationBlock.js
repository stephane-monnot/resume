import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import VerticalTimeline from '../../components/VerticalTimeline/VerticalTimeline';
import VerticalTimelineElement from '../../components/VerticalTimelineElement/VerticalTimelineElement';

import './ResumeWorkAndEducationBlock.css';

const formatPeriod = (start, end, formatMessage) => {
  const isToday = end === 'Today' || end === "Aujourd'hui" || end === '今';

  const period =
    (isToday ? new Date().getFullYear() : parseInt(end, 10)) -
    parseInt(start, 10);

  if (period <= 1) {
    return `${start} – ${end}`;
  }

  return `${start} – ${end} (${period}${formatMessage({
    id: 'Resume.years',
    defaultMessage: ' years',
  })})`;
};

const ResumeWorkAndEducationBlock = ({
  positions,
  educations,
  workIconStyle,
  educationIconStyle,
  formatMessage,
}) => (
  <ScreenBlock id="Resume-work" className="ResumeWorkAndEducationBlock">
    <div className="container">
      <div className="heading">
        <h2>
          <FormattedMessage
            id="Resume.workExperienceAndEducation"
            defaultMessage="Work experience & Education"
          />
        </h2>
        <p>
          <FormattedMessage
            id="Resume.workExperienceAndEducationSubtitle"
            defaultMessage="My previous jobs and my qualifications."
          />
        </p>
      </div>

      <VerticalTimeline>
        {positions.map((position, i) => (
          <VerticalTimelineElement
            className="Resume-position"
            key={i} // eslint-disable-line react/no-array-index-key
            icon={<WorkIcon />}
            iconStyle={workIconStyle}
            date={formatPeriod(
              position.startDate,
              position.endDate,
              formatMessage,
            )}
          >
            <h3 className="vertical-timeline-element-title">
              {position.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {position.company}
            </h4>
            <p>
              {/* eslint-disable-next-line react/no-danger */}
              <span dangerouslySetInnerHTML={{ __html: position.summary }} />
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <div id="Resume-education">
        <VerticalTimeline>
          {educations.map((education, i) => (
            <VerticalTimelineElement
              position={i % 2 ? 'left' : 'right'}
              id=""
              className="Resume-position"
              key={i} // eslint-disable-line react/no-array-index-key
              icon={<SchoolIcon />}
              iconStyle={educationIconStyle}
              date={`${education.startDate} – ${
                education.endDate
              } (${(education.endDate === 'Today' ||
              education.endDate === "Aujourd'hui" ||
              education.endDate === '今'
                ? new Date().getFullYear()
                : parseInt(education.endDate, 10)) -
                parseInt(education.startDate, 10)}${formatMessage({
                id: 'Resume.years',
                defaultMessage: ' years',
              })})`}
            >
              <h3 className="vertical-timeline-element-title">
                {education.fieldOfStudy}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {education.degree}
              </h4>
              <p>
                <span
                  /* eslint-disable-next-line react/no-danger */
                  dangerouslySetInnerHTML={{ __html: education.activities }}
                />
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  </ScreenBlock>
);

ResumeWorkAndEducationBlock.propTypes = {
  workIconStyle: PropTypes.object.isRequired,
  educationIconStyle: PropTypes.object.isRequired,
  positions: PropTypes.array.isRequired,
  educations: PropTypes.array.isRequired,
  formatMessage: PropTypes.func.isRequired,
};

export default ResumeWorkAndEducationBlock;
