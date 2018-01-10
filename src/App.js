import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import ja from 'react-intl/locale-data/ja';

import languages from './i18n';

import './App.css';

import IntlRoute from './IntlRoute';
import Analytics from './components/Analytics/Analytics';
import ResumeScreen from './containers/ResumeScreen/ResumeScreen';
import Meta from './containers/Meta/Meta';
import { changeLanguage } from "./actions";
import { history } from "./store/configureStore";


addLocaleData([...en, ...fr, ...ja]);

const theme = createMuiTheme({
  palette: {
    primary: blue,
    error: red,
  },
});

class App extends Component {
  componentWillMount() {
    console.log('App/componentWillMount', this.props.language);
  }

  render() {
    const defaultLanguage = process.env.REACT_APP_LOCALE || 'ja';
    const locale = this.props.currentLanguage || defaultLanguage;
    const { onChangeLanguage } = this.props;

    return (
      <IntlProvider
        locale={locale}
        key={locale}
        messages={languages[locale]}
      >
        <MuiThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <div className="App">
              <Meta locale={locale} />
              <Route path="/" component={Analytics}/>
              <IntlRoute exact onChangeLanguage={onChangeLanguage} language={defaultLanguage} path="/" component={ResumeScreen} />
              <IntlRoute exact onChangeLanguage={onChangeLanguage} language={'fr'} path="/fr/cv.html" component={ResumeScreen} />
              <IntlRoute exact onChangeLanguage={onChangeLanguage} language={'ja'} path="/ja/rirekisho.html" component={ResumeScreen} />
              <IntlRoute exact onChangeLanguage={onChangeLanguage} language={'en'} path="/en/resume.html" component={ResumeScreen} />
            </div>
          </ConnectedRouter>
        </MuiThemeProvider>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  currentLanguage: PropTypes.string
};

const mapStateToProps = (state) => {
  return ({
    currentLanguage: state.language.lang
  })
};

const mapActionsToProps = dispatch => ({
  onChangeLanguage: lang => dispatch(changeLanguage(lang))
});


export default connect(mapStateToProps, mapActionsToProps)(App)
