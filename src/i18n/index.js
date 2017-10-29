import en from './en';
import fr from './fr';
import ja from './ja';
import dot from 'dot-object';

const languages = { en: dot.dot(en), fr: dot.dot(fr), ja: dot.dot(ja) };

export default languages;