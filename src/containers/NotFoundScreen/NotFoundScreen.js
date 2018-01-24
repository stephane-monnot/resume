import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotFound from '../NotFound/NotFound';

class NotFoundScreen extends Component {
  render() {
    return (
      <NotFound />
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    currentLanguage: state.language.lang
  })
};

export default connect(mapStateToProps)(NotFoundScreen);
