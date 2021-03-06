import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import { ACTION_TYPES } from 'actionTypes/actionTypes';
import { apiReq } from '../../services/apiReq';
import { getCatFacts } from 'store/action/action';

function* handleCatFacts(action) {
  try {
    const res = yield call(apiReq, action.payload);
    const data = res.data;
    yield put({
      type: ACTION_TYPES.CAT_FACTS.SUCCESS,
      payload: data,
    });
  } catch (err) {
    yield put({
      type: ACTION_TYPES.CAT_FACTS.ERROR,
      payload: err.message,
    });
  }
}

export default function* watchCatFacts() {
  yield takeLatest(ACTION_TYPES.CAT_FACTS.REQUESTING, handleCatFacts);
}
