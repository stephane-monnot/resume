import React from 'react';

import './ScreenBlock.css';

const ScreenBlock = ({ children, className, ...othersProps }) => {
  className += ' ScreenBlock';

  return (
    <div className="ScreenBlockContainer">
      <div {...othersProps} className={className.trim()}>
        {children}
      </div>
    </div>
  );
};

ScreenBlock.defaultProps = {
  className: ''
};

export default ScreenBlock;
