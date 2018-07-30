import React from 'react';
import { connect } from 'react-redux';
import NotFound from '../NotFound/NotFound';

export const NotFoundScreen = () => <NotFound />;

const mapStateToProps = state => ({
  currentLanguage: state.language.lang,
});

export default connect(mapStateToProps)(NotFoundScreen);
