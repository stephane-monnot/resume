import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ResumeWorkAndEducationBlock from './ResumeWorkAndEducationBlock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter location="someLocation" context={{}}>
      <ResumeWorkAndEducationBlock  />
    </MemoryRouter>, div);
});
