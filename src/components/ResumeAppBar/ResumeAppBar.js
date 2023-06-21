import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import LanguagePicker from '../../components/LanguagePicker/LanguagePicker';

import SocialNetworkNavigation from '../SocialNetworkNavigation/SocialNetworkNavigation';

import './ResumeAppBar.css';

const ResumeAppBar = ({ emailAddress, snsAccounts }) => (
  <AppBar className="ResumeAppBar" position="absolute">
    <Toolbar className="ResumeAppBar-header">
      <LanguagePicker />
      <Button href={`https://mail.google.com/mail/?view=cm&to=roopeshb13%40gmail.com&su=Hey,Roopesh`} target="_blank">{emailAddress}</Button>
      <SocialNetworkNavigation services={snsAccounts} />
    </Toolbar>
  </AppBar>
);

ResumeAppBar.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  snsAccounts: PropTypes.array.isRequired,
};

export default ResumeAppBar;
