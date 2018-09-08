import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { VelocityTransitionGroup } from 'velocity-react';
import Button from '@material-ui/core/Button';

import './ShowMore.css';

class ShowMore extends React.PureComponent {
  state = {
    isOpened: false,
  };

  toggle = () => {
    this.setState({ isOpened: !this.state.isOpened });
  };

  render() {
    const { children } = this.props;
    return (
      <div
        className={classNames('ShowMore', {
          'ShowMore--is-opened': this.state.isOpened,
        })}
      >
        <VelocityTransitionGroup
          enter={{ animation: 'slideDown' }}
          leave={{ animation: 'slideUp' }}
        >
          {this.state.isOpened ? (
            <div className="ShowMore-content">{children}</div>
          ) : (
            undefined
          )}
        </VelocityTransitionGroup>
        <div className="ShowMore-button">
          <Button onClick={this.toggle}>
            {this.state.isOpened ? (
              <FormattedMessage
                id="Resume.showLess"
                defaultMessage="Show less"
              />
            ) : (
              <FormattedMessage
                id="Resume.showMore"
                defaultMessage="Show more"
              />
            )}
          </Button>
        </div>
      </div>
    );
  }
}

ShowMore.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ShowMore;
