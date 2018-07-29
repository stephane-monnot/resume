import React from 'react';
import PropTypes from 'prop-types';

const GridItem = ({ width, height, style, delay, duration, ...rest }) => (
  <div className="GridItem" style={{ width, height, ...style }} {...rest} />
);

GridItem.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  duration: PropTypes.number,
};

GridItem.defaultPropTypes = {
  height: 0,
  width: 0,
  style: {},
};

export default GridItem;
