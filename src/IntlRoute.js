import React from 'react';
import { Route } from 'react-router-dom';

const IntlRoute = ({ language, component: Component, ...rest, onChangeLanguage }) => (
  <Route
    {...rest}
    render={() => {
      console.log('IntlRoute.render', language);
      onChangeLanguage(language);
      return (<Component language={language} />);
    }}
  />
);

export default IntlRoute;
