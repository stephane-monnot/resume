import ls from 'local-storage';
import { put, call } from 'redux-saga/effects';
import * as actions from '../actions';

export function* changeLanguage(action) {
  yield call(ls, 'language', action.payload);
  yield put(actions.changeLanguageSuccess(action.payload));
}
