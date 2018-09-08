import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cvFR from '../../data/fr';
import cvJA from '../../data/ja';
import cvEN from '../../data/en';
import customers from '../../data/customers.json';
import cvPDFFR from '../../data/fr.pdf';
import cvPDFJA from '../../data/ja.pdf';
import cvPDFEN from '../../data/en.pdf';
import Resume from '../Resume/Resume';

class ResumeScreen extends Component {
  componentWillMount() {
    this.setState({
      cvs: { fr: cvFR, ja: cvJA, en: cvEN },
      cvPDFs: { fr: cvPDFFR, ja: cvPDFJA, en: cvPDFEN },
    });
  }

  render() {
    const cv = this.state.cvs[this.props.currentLanguage];
    const cvPDF = this.state.cvPDFs[this.props.currentLanguage];
    return <Resume {...cv} cvPDF={cvPDF} customers={customers} />;
  }
}

ResumeScreen.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentLanguage: state.language.lang,
});

export default connect(mapStateToProps)(ResumeScreen);
