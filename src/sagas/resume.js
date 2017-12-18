import { put, call } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch'
import * as actions from '../actions';

export function fetchResumeApi(id) {
  return fetch(`http://localhost/resumes/json/${id}`)
    .then(response => response.json())
}

export function* fetchResume(action) {
  const resume = yield call(fetchResumeApi, action.payload);
  yield put(actions.receiveResume(resume));
}
