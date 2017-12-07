import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';

import ScreenBlock from '../../components/ScreenBlock/ScreenBlock';
import VerticalTimeline from '../../components/VerticalTimeline/VerticalTimeline';
import VerticalTimelineElement from '../../components/VerticalTimelineElement/VerticalTimelineElement';

import './ResumeProjectsBlock.css';

const ResumeProjectsBlock = ({ projects, styles, formatDate }) => (
  <ScreenBlock id="Resume-projects" className="ResumeProjectsBlock">
    <div className="container">
      <div className="heading">
        <h2>
          <FormattedMessage
            id='Resume.projectsAndDevelopments'
            defaultMessage='Projects & developments'
          />
        </h2>
        <p>
          <FormattedMessage
            id='Resume.projectsAndDevelopmentsSubtitle'
            defaultMessage='Showcase of my latest works, projects and developments.'
          />
        </p>
      </div>

      <VerticalTimeline>
        {projects.map((project, i) =>
          <VerticalTimelineElement
            style={{ borderTop: '3px solid ' + styles[project.subcategory + 'Color'].border }}
            className={"ResumeProjectsBlock " + styles[project.subcategory + 'Color'].className}
            key={i}
            icon={styles[project.subcategory + 'Color'].icon}
            iconStyle={styles[project.subcategory + 'Color'].style}
            date={Date.parse(project.date) ? formatDate(new Date(project.date).getTime(), {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric'
            }): project.date}
          >
            <div className="ResumeProjectsBlock-technologies">
              {project.technologies.map((technology, j) =>
                <Chip
                  key={j}
                  label={technology.name}
                />
              )}
            </div>
            <h3 className="vertical-timeline-element-title">{project.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{project.subtitle}</h4>
            <p>
              <span dangerouslySetInnerHTML={{ __html: project.content }}></span>
            </p>
            <br />
            <div className="ResumeProjectsBlock-links">
              {project.links.map((link, i) =>
                <Button key={i} raised color="default" target="_blank" href={link.url}>{link.text}</Button>
              )}
            </div>
          </VerticalTimelineElement>
        )}
      </VerticalTimeline>
    </div>
  </ScreenBlock>
);

ResumeProjectsBlock.propTypes = {
  projects: PropTypes.array.isRequired,
  styles: PropTypes.object.isRequired,
  formatDate: PropTypes.func.isRequired,
};

export default ResumeProjectsBlock;
