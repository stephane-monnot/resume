import React from 'react';
import flow from 'lodash/flow';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import languages from './i18n/languages.json';
import translate from './i18n/Translate';

const LanguagePicker = () => (
  <div>
    {languages.map((language, i) =>
      <Button color="contrast" component={Link} to={'/' + language.url + '.html'}>{language.name}</Button>
    )}
  </div>
);

const decorators = flow([
  translate('LanguagePicker')
]);

export default decorators(LanguagePicker);