import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

import './TimelineElement.css';

class TimelineElement extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.object,
    date: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.state = {visible: false};
  }

  onVisibilitySensorChange(isVisible) {
    if (isVisible) {
      this.setState({visible: true})
    }
  }

  render() {
    const { id, title, subtitle, content, icon, iconStyle, date } = this.props;

    return (
      <VisibilitySensor onChange={this.onVisibilitySensorChange}>
        <div id={id} className="TimelineElement">
          <span style={iconStyle} className="TimelineElement-icon">{icon}</span>
          <div className={'TimelineElement-content ' + (this.state.visible ? 'bounce-in': 'is-hidden')}>
            <h3 className="TimelineElement-title">{title}</h3>
            <h4 className="TimelineElement-subtitle">{subtitle}</h4>
            <p dangerouslySetInnerHTML={{ __html: content }}/>
            <span className="TimelineElement-date">{date}</span>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}

export default TimelineElement;