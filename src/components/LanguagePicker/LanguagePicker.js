import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import languages from '../../i18n/languages.json';

const LanguagePicker = () => (
  <div>
    {languages.map((language, i) =>
      <Button key={i} color="contrast" component={Link} to={'/' + language.url + '.html'}>{language.name}</Button>
    )}
  </div>
);

export default LanguagePicker;
