import React, { Component } from 'react';
import { connect } from 'react-redux';
import cvFR from './data/fr.json';
import cvJP from './data/jp.json';
import cvEN from './data/en.json';
import Resume from './Resume';
import { changeLanguage } from './reducers/language';

class ResumeScreen extends Component {
  constructor() {
    super();
    this.state = {cvs: {fr: cvFR, jp: cvJP, en: cvEN}}
  }

  componentWillMount() {
    this.props.onChangeLanguage(this.props.language)
  }

  render() {
    const cv = this.state.cvs[this.props.language];
    return (
      <Resume {...cv}/>
    );
  }
}

const actionsToProps = dispatch => ({
  onChangeLanguage: lang => dispatch(changeLanguage(lang))
});

export default connect(null, actionsToProps)(ResumeScreen)