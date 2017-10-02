import ls from 'local-storage';
import { put, call, takeEvery, all } from 'redux-saga/effects';
import { changeLanguageSuccess } from './reducers/language';
import { CHANGE_LANGUAGE } from './reducers/language';

export function* onChangeLanguage(action) {
  yield call(ls, 'language', action.payload);
  yield put(changeLanguageSuccess(action.payload));
}

export default function* rootSaga() {
  yield all([
    takeEvery(CHANGE_LANGUAGE, onChangeLanguage),
  ]);
}