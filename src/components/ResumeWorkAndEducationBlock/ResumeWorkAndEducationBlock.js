import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Chip from '@material-ui/core/Chip';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import VerticalTimeline from '../../components/VerticalTimeline/VerticalTimeline';
import VerticalTimelineElement from '../../components/VerticalTimelineElement/VerticalTimelineElement';
import ShowMore from '../../components/ShowMore/ShowMore';

import './ResumeWorkAndEducationBlock.css';

function formatDate(inputDate) {
  const dateParts = inputDate.split(' ');
  const monthName = dateParts[0];
  const year = parseInt(dateParts[1], 10);

  const monthIndex = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(monthName);

  return new Date(year, monthIndex, 1);
}

function calculateDateDifference(startDateStr, endDateStr) {
  const startDate = formatDate(startDateStr);

  let endDate;
  if (endDateStr === 'Present') {
    endDate = new Date(); // Current date
  } else {
    endDate = formatDate(endDateStr);
  }

  const diffInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  let result = '';
  if (years > 0) {
    result += years === 1 ? `${years} year` : `${years} years`;
  }

  if (months > 0) {
    result += result.length > 0 ? ' ' : '';
    result += months === 1 ? `${months} month` : `${months} months`;
  }

  return result;
}

const formatPeriod = (start, end, formatMessage) => {
  // const period =
  //   (isToday ? new Date().getFullYear() : parseInt(end, 10)) -
  //   parseInt(start, 10);

  return `${start} - ${end} (${calculateDateDifference(start, end)})`;
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
        {positions.map((position, i) => {
          let picture = null;
          if (position.picture) {
            picture = require(`../../data/img/${position.picture}`); // eslint-disable-line global-require
          }
          return (
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
              <div className="ResumeProjectsBlock-technologies">
                {position.technologies.map((technology, j) => (
                  <Chip key={j} label={technology.name} /> // eslint-disable-line react/no-array-index-key
                ))}
              </div>
              {picture && (
                <img
                  className="ResumeWorkAndEducationBlock-picture"
                  alt=""
                  src={picture}
                />
              )}
              <h3 className="vertical-timeline-element-title">
                {position.title} @{" "}
                <a href={position.companySite} target="_blank" rel="noopener noreferrer">
                  {position.company}
                </a>
              </h3>
              {position.keywords && (
                <div className="ResumeWorkAndEducationBlock-keywords">
                  {position.keywords.map((keyword, j) => (
                    <span key={j}> {keyword.name} </span> // eslint-disable-line react/no-array-index-key
                  ))}
                </div>
              )}
              <p>
                {/* eslint-disable-next-line react/no-danger */}
                <span dangerouslySetInnerHTML={{ __html: position.summary }} />
              </p>
              {position.more && (
                <ShowMore>
                  <p dangerouslySetInnerHTML={{ __html: position.more }} />
                </ShowMore>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

      <div id="Resume-education">
        <VerticalTimeline>
          {educations.map((education, i) => (
            <VerticalTimelineElement
              position={i % 2 ? 'right' : 'left'}
              id=""
              className="Resume-position"
              key={i} // eslint-disable-line react/no-array-index-key
              icon={<SchoolIcon />}
              iconStyle={educationIconStyle}
              date={formatPeriod(
                education.startDate,
                education.endDate,
                formatMessage,
              )}
            >
              <h3 className="vertical-timeline-element-title">
                {education.fieldOfStudy}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {education.degree}
              </h4>
              {education.activities &&
                !Array.isArray(education.activities) && (
                  <p>
                    <span
                      /* eslint-disable-next-line react/no-danger */
                      dangerouslySetInnerHTML={{ __html: education.activities }}
                    />
                  </p>
                )}
              {education.activities &&
                Array.isArray(education.activities) && (
                  <div className="ResumeWorkAndEducationBlock-keywords">
                    {education.activities.map((activity, j) => (
                      <span key={j}> {activity.name} </span> // eslint-disable-line react/no-array-index-key
                    ))}
                  </div>
                )}
              {education.summary && (
                <p dangerouslySetInnerHTML={{ __html: education.summary }} />
              )}
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
