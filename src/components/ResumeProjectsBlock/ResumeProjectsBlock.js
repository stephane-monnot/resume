import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import VerticalTimeline from '../../components/VerticalTimeline/VerticalTimeline';
import VerticalTimelineElement from '../../components/VerticalTimelineElement/VerticalTimelineElement';

import appTheme from '../../theme';
import './ResumeProjectsBlock.css';

const ResumeProjectsBlock = ({ projects, formatDate }) => {
  const formatProjectDate = date => {
    if (Date.parse(date)) {
      return formatDate(new Date(date).getTime(), {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });
    }
    return date;
  };

  return (
    <ScreenBlock id="Resume-projects" className="ResumeProjectsBlock">
      <div className="container">
        <div className="heading">
          <h2>
            <FormattedMessage
              id="Resume.projectsAndDevelopments"
              defaultMessage="Projects & developments"
            />
          </h2>
          <p>
            <FormattedMessage
              id="Resume.projectsAndDevelopmentsSubtitle"
              defaultMessage="Showcase of my latest works, projects and developments."
            />
          </p>
        </div>

        <VerticalTimeline>
          {projects.map((project, i) => (
            <VerticalTimelineElement
              style={{
                borderTop: `3px solid ${
                  appTheme[`${project.subcategory}Color`].border
                }`,
              }}
              className={`ResumeProjectsBlock ${
                appTheme[`${project.subcategory}Color`].className
              }`}
              key={i} // eslint-disable-line react/no-array-index-key
              icon={appTheme[`${project.subcategory}Color`].icon}
              iconStyle={appTheme[`${project.subcategory}Color`].style}
              date={formatProjectDate(project.data)}
            >
              <div className="ResumeProjectsBlock-technologies">
                {project.technologies.map((technology, j) => (
                  <Chip key={j} label={technology.name} /> // eslint-disable-line react/no-array-index-key
                ))}
              </div>
              <h3 className="vertical-timeline-element-title">
                {project.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {project.subtitle}
              </h4>
              <p>
                {/* eslint-disable-next-line react/no-danger */}
                <span dangerouslySetInnerHTML={{ __html: project.content }} />
              </p>
              <br />
              <div className="ResumeProjectsBlock-links">
                {project.links.map((link, j) => (
                  <Button
                    key={j} // eslint-disable-line react/no-array-index-key
                    variant="outlined"
                    color="default"
                    target="_blank"
                    href={link.url}
                  >
                    {link.text}
                  </Button>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </ScreenBlock>
  );
};

ResumeProjectsBlock.propTypes = {
  projects: PropTypes.array.isRequired,
  formatDate: PropTypes.func.isRequired,
};

export default ResumeProjectsBlock;
