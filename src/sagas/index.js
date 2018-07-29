import { takeEvery, all } from 'redux-saga/effects';
import { changeLanguage } from './language';
import * as actions from '../actions';

export default function* rootSaga() {
  yield all([takeEvery(actions.CHANGE_LANGUAGE, changeLanguage)]);
}
