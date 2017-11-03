import React, { Component } from 'react';
import { connect } from 'react-redux';
import cvFR from '../../data/fr.json';
import cvJA from '../../data/ja.json';
import cvEN from '../../data/en.json';
import cvPDFFR from '../../data/fr.pdf';
import cvPDFJA from '../../data/fr.pdf';
import cvPDFEN from '../../data/fr.pdf';
import Resume from '../Resume/Resume';
import { changeLanguage } from '../../reducers/language';

class ResumeScreen extends Component {
  constructor() {
    super();
    this.state = {
      cvs: {fr: cvFR, ja: cvJA, en: cvEN},
      cvPDFs: {fr: cvPDFFR, ja: cvPDFJA, en: cvPDFEN}
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