import React from 'react';

import './ScreenBlock.css';

const ScreenBlock = ({ children, className, containerClassName, ...othersProps }) => {
  className += ' ScreenBlock';
  containerClassName += ' ScreenBlockContainer';

  return (
    <div className={containerClassName.trim()}>
      <div {...othersProps} className={className.trim()}>
        {children}
      </div>
    </div>
  );
};

ScreenBlock.defaultProps = {
  className: '',
  containerClassName: ''
};

export default ScreenBlock;
