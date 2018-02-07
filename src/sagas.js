import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'


export function* helloSaga() {
    console.log('HelloSaga');
  //  yield takeEvery('HELOSAGA',hello );
}


export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({type: 'INCREMENT'})
}
export function* hello(action) {
    yield call(delay, 5000);
    yield put({type: 'ADD_NEW_VALUE',masData:action.masData})
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC322', incrementAsync)
}
export function* WathchADD_NEW_VALUE_SAGA() {
  yield takeEvery('ADD_NEW_VALUE_SAGA', hello)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync(),
      WathchADD_NEW_VALUE_SAGA()

  ]
}
