import React, { Component } from 'react';
import { connect } from 'react-redux';
import cvFR from '../../data/fr.json';
import cvJA from '../../data/ja.json';
import cvEN from '../../data/en.json';
import cvPDFFR from '../../data/fr.pdf';
import cvPDFJA from '../../data/ja.pdf';
import cvPDFEN from '../../data/en.pdf';
import Resume from '../Resume/Resume';
import { changeLanguage, requestResume } from '../../actions';

class ResumeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvs: {fr: cvFR, ja: cvJA, en: cvEN},
      cvPDFs: {fr: cvPDFFR, ja: cvPDFJA, en: cvPDFEN}
    }
  }

  componentWillMount() {
    this.props.onChangeLanguage(this.props.language);
    this.props.requestResume(1);
  }

  render() {
    const { resume } = this.props;

    if (resume.data) {
      const cvPDF = this.state.cvPDFs[this.props.language];
      return (
        <Resume {...resume.data} cvPDF={cvPDF}/>
      );
    }

    return null;
  }
}

function mapStateToProps(state) {
  return { resume: state.resume }
}

const mapDispatchToProps = dispatch => ({
  onChangeLanguage: lang => dispatch(changeLanguage(lang)),
  requestResume: id => dispatch(requestResume(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResumeScreen)