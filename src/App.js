import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
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
import configureStore from './store/configureStore';

const store = configureStore({});

const theme = createMuiTheme({
  palette: {
    primary: blue, // Purple and green play nicely together.
    error: red,
  },
});

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
              <AppBar position="fixed">
                <Toolbar>
                  <Typography type="title" color="inherit" className="App-title">
                    {/*MONNOT Stéphane*/}
                  </Typography>
                  <LanguagePicker/>
                  <Button href="mailto:monnot.stephane@gmail.com" color="contrast">monnot.stephane@gmail.com</Button>
                </Toolbar>
              </AppBar>
              <Route exact path="/" render={() => <ResumeScreen language="jp" />} />
              <Route exact path="/fr/cv" render={() => <ResumeScreen language="fr" />} />
              <Route exact path="/jp/rirekisho" render={() => <ResumeScreen language="jp" />} />
              <Route exact path="/en/resume" render={() => <ResumeScreen language="en" />} />
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}


export default App;
