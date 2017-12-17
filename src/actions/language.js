export const CHANGE_LANGUAGE = 'resume/language/change';
export const CHANGE_LANGUAGE_SUCCESS = 'resume/language/change/success';

export function changeLanguage(payload) {
  return { type: CHANGE_LANGUAGE, payload };
}

export function changeLanguageSuccess(payload) {
  return { type: CHANGE_LANGUAGE_SUCCESS, payload };
}
