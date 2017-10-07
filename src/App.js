import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Helmet from 'react-helmet';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

import './App.css';

import LanguagePicker from './LanguagePicker';
import ResumeScreen from './ResumeScreen';
import WaitingUntilJapanScreen from './WaitingUntilJapanScreen';
import configureStore from './store/configureStore';

const store = configureStore({});

const theme = createMuiTheme({
  palette: {
    primary: blue, // Purple and green play nicely together.
    error: red,
  },
});

const title = 'Stéphane Monnot : Web developer in Osaka';

class App extends Component {
  constructor() {
    super();
    this.state = { currentLanguage: 'FR' };
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <div className="App">
              <Helmet titleTemplate={`%s - ${title}`} />
              <AppBar position="fixed">
                <Toolbar>
                  <Typography type="title" color="inherit" className="App-title">
                    {/*MONNOT Stéphane*/}
                  </Typography>
                  <LanguagePicker/>
                  <Link to="/jp/until/japan.html" />
                  <Link to="/fr/until/japan.html" />
                  <Link to="/en/until/japan.html" />
                  <Button href="mailto:monnot.stephane@gmail.com" color="contrast">monnot.stephane@gmail.com</Button>
                </Toolbar>
              </AppBar>
              <Route exact path="/" render={() => <ResumeScreen language="jp" title="履歴書" />} />
              <Route exact path="/fr/cv.html" render={() => <ResumeScreen language="fr" title="CV" />} />
              <Route exact path="/jp/rirekisho.html" render={() => <ResumeScreen language="jp" title="履歴書" />} />
              <Route exact path="/en/resume.html" render={() => <ResumeScreen language="en" title="Resume" />} />
              <Route exact path="/jp/until/japan.html" render={() => <WaitingUntilJapanScreen language="jp" title="日本まで" />} />
              <Route exact path="/en/until/japan.html" render={() => <WaitingUntilJapanScreen language="en" title="日本まで" />} />
              <Route exact path="/fr/until/japan.html" render={() => <WaitingUntilJapanScreen language="fr" title="日本まで" />} />

            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}


export default App;
