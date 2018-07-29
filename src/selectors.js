import { createSelector } from 'reselect';
import find from 'lodash/find';
import languages from './i18n/languages.json';

const findLanguageInfo = lang => find(languages, { value: lang });

export const getCurrentLanguage = state => state.user.lang;
export const getCurrentLanguageInfo = createSelector(
  getCurrentLanguage,
  findLanguageInfo,
);
