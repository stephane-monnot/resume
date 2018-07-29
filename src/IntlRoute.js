import React from 'react';
import { Route } from 'react-router-dom';

const IntlRoute = ({
  language,
  component: Component,
  onChangeLanguage,
  ...rest
}) => (
  <Route
    {...rest}
    render={() => {
      onChangeLanguage(language);
      return <Component language={language} />;
    }}
  />
);

export default IntlRoute;
