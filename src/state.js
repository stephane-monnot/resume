
import { combineReducers } from 'redux';
import language from './reducers/language';

const rootReducer = combineReducers({
  language,
});

export default rootReducer;