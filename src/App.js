import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import ja from 'react-intl/locale-data/ja';

import languages from './i18n';

import './App.css';

import ResumeScreen from './containers/ResumeScreen/ResumeScreen';
import Meta from './containers/Meta/Meta';
import WaitingUntilJapanScreen from './containers/WaitingUntilJapanScreen/WaitingUntilJapanScreen';

// Async GA (Disable when building with react-snap)
const loadAnalytics = (typeof process.env.REACT_APP_ANALYTICS !== 'undefined') ? process.env.REACT_APP_ANALYTICS : true;
let Analytics = null;
if (loadAnalytics === true) {
  Analytics = require('./components/Analytics/Analytics').default;
}

addLocaleData([...en, ...fr, ...ja]);

const theme = createMuiTheme({
  palette: {
    primary: blue,
    error: red,
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = { currentLanguage: 'FR' };
  }

  render() {
    const locale = process.env.REACT_APP_LOCALE || 'ja';
    const title = locale === 'ja' ? '履歴書' : 'Resume' ;

    return (
      <IntlProvider
        locale={this.props.currentLanguage}
        key={this.props.currentLanguage}
        messages={languages[this.props.currentLanguage]}
      >
        <MuiThemeProvider theme={theme}>
          <Router>
            <div className="App">
              <Meta locale={this.props.currentLanguage} />

              {Analytics &&
                <Route path="/" component={Analytics}/>
              }

              <Route exact path="/" render={() => <ResumeScreen language={locale} title={title} />} />
              <Route exact path="/fr/cv.html" render={() => <ResumeScreen language="fr" title="CV" />} />
              <Route exact path="/ja/rirekisho.html" render={() => <ResumeScreen language="ja" title="履歴書" />} />
              <Route exact path="/en/resume.html" render={() => <ResumeScreen language="en" title="Resume" />} />
              <Route exact path="/ja/until/japan.html" render={() => <WaitingUntilJapanScreen language="ja" title="日本まで" />} />
              <Route exact path="/en/until/japan.html" render={() => <WaitingUntilJapanScreen language="en" title="日本まで" />} />
              <Route exact path="/fr/until/japan.html" render={() => <WaitingUntilJapanScreen language="fr" title="日本まで" />} />

            </div>
          </Router>
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
}

export default connect(mapStateToProps)(App);
