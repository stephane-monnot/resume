import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';

import LanguagePicker from '../../components/LanguagePicker/LanguagePicker';

import './ResumeAppBar.css';

const ResumeAppBar = ({ services }) => (
  <AppBar className="ResumeAppBar" position="absolute">
    <Toolbar className="ResumeAppBar-header">
      <LanguagePicker/>
      <Button href="mailto:monnot.stephane@gmail.com" color="contrast">monnot.stephane@gmail.com</Button>
    </Toolbar>
  </AppBar>
);

export default ResumeAppBar;
