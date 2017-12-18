import { combineReducers } from 'redux';
import language from './language';
import resume from './resume';

const rootReducer = combineReducers({
  language,
  resume,
});

export default rootReducer;
