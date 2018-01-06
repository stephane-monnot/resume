import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './FadeTransition.css';

const FadeTransition = (props) => (
  <CSSTransition
    in={true}
    appear={true}
    timeout={5000}
    {...props}
    classNames="FadeTransition"
  />
);

export default FadeTransition;
