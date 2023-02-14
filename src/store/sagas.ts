import { all, fork } from 'redux-saga/effects';

import { tasksSaga } from './tasks';

function* rootSaga() {
  yield all([
    fork(tasksSaga),
  ]);
}

export {
  rootSaga,
};
