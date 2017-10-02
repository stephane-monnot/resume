import { createAction } from 'redux-actions';

export const CHANGE_LANGUAGE = 'resume/language/change';
export const CHANGE_LANGUAGE_SUCCESS = 'resume/language/change/success';

export default function reducer(state = {
  lang: 'en'
}, action) {
  switch (action.type) {
    case CHANGE_LANGUAGE_SUCCESS:
      return {
        ...state,
        lang: action.payload
      };
    default:
        return state;
  }
}

export const changeLanguage = createAction(CHANGE_LANGUAGE);
export const changeLanguageSuccess = createAction(CHANGE_LANGUAGE_SUCCESS);