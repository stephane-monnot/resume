import React from 'react';
import ReactDOM from 'react-dom';
import DotsProgress from './DotsProgress';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <DotsProgress numberOfActiveDots={5} maxNumberOfDots={10} />,
    div,
  );
});
