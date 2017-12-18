import { takeEvery, all } from 'redux-saga/effects';
import { changeLanguage } from './language';
import { fetchResume } from './resume';
import * as actions from '../actions';

export default function* rootSaga() {
  yield all([
    takeEvery(actions.CHANGE_LANGUAGE, changeLanguage),
    takeEvery(actions.REQUEST_RESUME, fetchResume)
  ]);
}
