import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import ResumeAboutMeBlock from './ResumeAboutMeBlock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale="en">
    <MemoryRouter location="someLocation" context={{}}>
      <ResumeAboutMeBlock
        fullName="Monnot Stéphane"
        headline="Ingénieur full-stack web"
        summary="Ingénieur full-stack web & intervenant / formateur"
        pictureUrl="https://stephanemonnot.com/share.png"
        resumeUrl="https://stephanemonnot.com/static/media/en.6743b0e3.pdf"
      />
    </MemoryRouter>
    </IntlProvider>, div);
});
