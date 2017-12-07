import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

import LanguagePicker from '../../components/LanguagePicker/LanguagePicker';

import './ResumeAppBar.css';
import SocialNetworkNavigation from "../SocialNetworkNavigation/SocialNetworkNavigation";

const ResumeAppBar = ({ emailAddress, snsAccounts }) => (
  <AppBar className="ResumeAppBar" position="absolute">
    <Toolbar className="ResumeAppBar-header">
      <LanguagePicker />
      <Button href={`mailto:${emailAddress}`} color="contrast">{emailAddress}</Button>
      <SocialNetworkNavigation services={snsAccounts} />
    </Toolbar>
  </AppBar>
);

ResumeAppBar.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  snsAccounts: PropTypes.array.isRequired,
};

export default ResumeAppBar;
