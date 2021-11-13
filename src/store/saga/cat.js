import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';
import { ACTION_TYPES } from 'actionTypes/actionTypes';
import { apiReq } from '../../services/apiReq';
import { getCatFacts } from 'store/action/action';

function* handleCatFacts(action) {
  try {
    const res = yield call(apiReq, action.payload);
    console.log('this is REEEEEES', res);
    const { data } = res;
    yield put({
      type: ACTION_TYPES.CAT_FACTS.SUCCESS,
      payload: data,
    });
    // yield put(getCatFacts(res.data));
  } catch (err) {
    console.log(err);
  }
}

export default function* watchCatFacts() {
  yield takeLatest(ACTION_TYPES.CAT_FACTS.REQUESTING, handleCatFacts);
}
