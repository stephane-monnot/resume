import dot from 'dot-object';

import en from './en';
import fr from './fr';
import ja from './ja';

const languages = { en: dot.dot(en), fr: dot.dot(fr), ja: dot.dot(ja) };

export default languages;
