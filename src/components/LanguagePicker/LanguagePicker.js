import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import languages from '../../i18n/languages.json';

import './LanguagePicker.css';

const LanguagePicker = () => (
  <div className="LanguagePicker">
    {languages.map(language => (
      <Button
        className="LanguagePicker-button"
        key={language.name}
        component={Link}
        to={`/${language.url}.html`}
      >
        {language.name}
      </Button>
    ))}
  </div>
);

export default LanguagePicker;
