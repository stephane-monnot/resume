import React from 'react';
import PropTypes from 'prop-types';

const GridItem = ({ width, height, ...rest }) => (
  <div style={{ width, height }} {...rest} />
);

GridItem.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node.isRequired
};

GridItem.defaultPropTypes = {
  height: 0,
  width: 0,
};

export default GridItem;
