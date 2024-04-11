import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from './reducer';
import { Screen } from '../component/common';
function fetchUsersApi() {
  return axios.get('https://jsonplaceholder.typicode.com/users');
}
function* fetchUsersSaga() {
  try {
    Screen.LoaderON();
    const response = yield call(fetchUsersApi);
    const data = response.data?.map(({ company, website, address, ...rest }) => rest);
    yield put(fetchUsersSuccess(data));
    Screen.LoaderOff();
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}
export default function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersSaga);
}
