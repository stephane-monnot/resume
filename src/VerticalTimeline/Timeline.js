import React, { Component } from 'react';

import './Timeline.css';

class Timeline extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="Timeline cssanimations">
        {children}
      </div>
    );
  }
}

export default Timeline;