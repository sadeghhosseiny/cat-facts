import { all } from 'redux-saga/effects';
import watchCatFacts from './cat';

export default function* rootSaga() {
  yield all([watchCatFacts()]);
}
