import React, { Component } from 'react';
import { connect } from 'react-redux';
import cvFR from './data/fr.json';
import cvJP from './data/jp.json';
import cvEN from './data/en.json';
import cvPDFFR from './data/fr.pdf';
import cvPDFJP from './data/fr.pdf';
import cvPDFEN from './data/fr.pdf';
import Resume from './Resume';
import { changeLanguage } from './reducers/language';

class ResumeScreen extends Component {
  constructor() {
    super();
    this.state = {
      cvs: {fr: cvFR, jp: cvJP, en: cvEN},
      cvPDFs: {fr: cvPDFFR, jp: cvPDFJP, en: cvPDFEN}
    }
  }

  componentWillMount() {
    this.props.onChangeLanguage(this.props.language)
  }

  render() {
    const cv = this.state.cvs[this.props.language];
    const cvPDF = this.state.cvPDFs[this.props.language];
    return (
      <Resume {...cv} cvPDF={cvPDF}/>
    );
  }
}

const actionsToProps = dispatch => ({
  onChangeLanguage: lang => dispatch(changeLanguage(lang))
});

export default connect(null, actionsToProps)(ResumeScreen)