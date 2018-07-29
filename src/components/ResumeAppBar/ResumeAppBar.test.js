import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ResumeAppBar from './ResumeAppBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter location="someLocation" context={{}}>
      <ResumeAppBar emailAddress="test@test.fr" snsAccounts={[]} />
    </MemoryRouter>,
    div,
  );
});
