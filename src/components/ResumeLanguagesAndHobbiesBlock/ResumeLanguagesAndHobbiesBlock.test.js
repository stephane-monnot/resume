import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import ResumeLanguagesAndHobbiesBlock from './ResumeLanguagesAndHobbiesBlock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale="en">
      <MemoryRouter location="someLocation" context={{}}>
        <ResumeLanguagesAndHobbiesBlock
          languages={[]}
          hobbies={[]}
          hobbyCardStyle={{}}
        />
      </MemoryRouter>
    </IntlProvider>,
    div,
  );
});
