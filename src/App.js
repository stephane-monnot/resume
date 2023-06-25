import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';

import languages from './i18n';

import './App.css';

import IntlRoute from './IntlRoute';
import Analytics from './components/Analytics/Analytics';
import NotFoundScreen from './containers/NotFoundScreen/NotFoundScreen';
import ResumeScreen from './containers/ResumeScreen/ResumeScreen';
import Meta from './containers/Meta/Meta';
import { changeLanguage } from './actions';
import { history } from './store/configureStore';

addLocaleData([...en]);

const theme = createMuiTheme({
  palette: {
    primary: blue,
    error: red,
  },
});

export const App = ({ currentLanguage, onChangeLanguage }) => {
  const defaultLanguage = 'en';
  const locale = currentLanguage || defaultLanguage;

  return (
    <IntlProvider locale={locale} key={locale} messages={languages[locale]}>
      <MuiThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <div className="App">
            <Meta locale={locale} />
            <Route path="/" component={Analytics} />

            <Switch>
              <IntlRoute
                exact
                onChangeLanguage={onChangeLanguage}
                language={defaultLanguage}
                path="/"
                component={ResumeScreen}
              />
              <IntlRoute
                exact
                onChangeLanguage={onChangeLanguage}
                language="en"
                path="/en/resume.html"
                component={ResumeScreen}
              />
              <IntlRoute
                onChangeLanguage={onChangeLanguage}
                language="en"
                component={NotFoundScreen}
              />
            </Switch>
          </div>
        </ConnectedRouter>
      </MuiThemeProvider>
    </IntlProvider>
  );
};

App.propTypes = {
  currentLanguage: PropTypes.string,
  onChangeLanguage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentLanguage: state.language.lang,
});

const mapActionsToProps = dispatch => ({
  onChangeLanguage: lang => dispatch(changeLanguage(lang)),
});

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(App);
