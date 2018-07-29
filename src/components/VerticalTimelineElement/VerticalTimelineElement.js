import React from 'react';
import { VerticalTimelineElement as VerticalTimelineElementBase } from 'react-vertical-timeline-component';

import './VerticalTimelineElement.css';

const VerticalTimelineElement = ({ className, ...props }) => {
  className += ' VerticalTimelineElement';

  return <VerticalTimelineElementBase className={className} {...props} />;
};

VerticalTimelineElement.defaultProps = {
  className: '',
};

export default VerticalTimelineElement;
