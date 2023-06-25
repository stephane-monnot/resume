import React from 'react';
import PropTypes from 'prop-types';
import SVGDeviconInline from 'react-devicon/_base/SVGDeviconInline';

import iconSVG from './nestjs.svg';

/** Apachecordova */
function Nestjs({ width, height, className }) {
  return (
    <SVGDeviconInline
      style={{ color: 'red' }}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  );
}

Nestjs.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Nestjs;
