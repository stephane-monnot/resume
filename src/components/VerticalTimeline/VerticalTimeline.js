import React from 'react';
import { VerticalTimeline as VerticalTimelineBase } from 'react-vertical-timeline-component';

import './VerticalTimeline.css';
import 'react-vertical-timeline-component/style.min.css';

const VerticalTimeline = (props) => (
  <VerticalTimelineBase
    className="VerticalTimeline"
    {...props}
  />
);

export default VerticalTimeline;
