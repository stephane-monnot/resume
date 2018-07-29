import React from 'react';
import Proptypes from 'prop-types';

import './DotsProgress.css';

const DotsProgress = ({ maxNumberOfDots, numberOfActiveDots }) => (
  <div className="dots-progress">
    {[...Array(maxNumberOfDots)].map((x, i) => (
      <div
        className={`dots-progress-dot ${
          numberOfActiveDots > i ? 'dots-progress-dot-active' : ''
        }`}
        key={i} // eslint-disable-line react/no-array-index-key
      />
    ))}
  </div>
);

DotsProgress.propTypes = {
  maxNumberOfDots: Proptypes.number.isRequired,
  numberOfActiveDots: Proptypes.number.isRequired,
};

export default DotsProgress;
