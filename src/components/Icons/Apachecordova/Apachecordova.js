import React from 'react';
import PropTypes from 'prop-types';
import SVGDeviconInline from 'react-devicon/_base/SVGDeviconInline';

import iconSVG from './Apachecordova.svg';

/** Apachecordova */
function Apachecordova({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={`Apachecordova ${className}`}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  );
}

Apachecordova.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Apachecordova;
