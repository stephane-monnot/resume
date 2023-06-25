import React, { Component } from 'react';
import { connect } from 'react-redux';
import cvEN from '../../data/en';
import customers from '../../data/customers.json';
import cvPDFEN from '../../data/en.pdf';
import Resume from '../Resume/Resume';

class ResumeScreen extends Component {
  componentWillMount() {
    this.setState({
      cvs: { en: cvEN },
      cvPDFs: { en: cvPDFEN },
    });
  }

  render() {
    const cv = this.state.cvs[this.props.currentLanguage];
    const cvPDF = this.state.cvPDFs[this.props.currentLanguage];
    return <Resume {...cv} cvPDF={cvPDF} customers={customers} />;
  }
}

ResumeScreen.propTypes = {
  currentLanguage: 'en',
};

const mapStateToProps = state => ({
  currentLanguage: 'en',
});

export default connect(mapStateToProps)(ResumeScreen);
