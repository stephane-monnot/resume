import { CHANGE_LANGUAGE_SUCCESS } from '../actions';

export default function reducer(
  state = {
    lang: null,
  },
  action,
) {
  switch (action.type) {
    case CHANGE_LANGUAGE_SUCCESS:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
}
