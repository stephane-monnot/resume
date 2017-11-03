import React from 'react';

import './ScreenBlock.css';

const ScreenBlock = (props) => {
  const { children } = props;
  let { className } = props;
  let newProps = Object.assign({}, props);
  delete newProps.className;

  className += ' ScreenBlock';

  return (
    <div className="ScreenBlockContainer">
      <div {...newProps} className={className.trim()}>
        {children}
      </div>
    </div>
  );
};

ScreenBlock.defaultProps = {
  className: ''
};

export default ScreenBlock;
