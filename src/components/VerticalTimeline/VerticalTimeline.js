import React from 'react';
import { VerticalTimeline as VerticalTimelineBase } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import './VerticalTimeline.css';

const VerticalTimeline = props => (
  <VerticalTimelineBase className="VerticalTimeline" {...props} />
);

export default VerticalTimeline;
