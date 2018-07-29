import React from 'react';
import { Route } from 'react-router-dom';

const IntlRoute = ({ language, component: Component, ...rest, onChangeLanguage }) => (
  <Route
    {...rest}
    render={() => {
      onChangeLanguage(language);
      return (<Component language={language} />);
    }}
  />
);

export default IntlRoute;
