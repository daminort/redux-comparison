import { all, takeLatest, put, call } from 'redux-saga/effects';

import type { TTask } from 'interfaces/tasks.interface';
import { tasksAPI } from 'api/taskAPI';

import { actions } from './actions';
import { TYPES } from './constants';

function* tasksReload() {

  yield put(actions.setLoading(true));

  const tasks: TTask[] = yield call(tasksAPI.getTasks);

  yield put(actions.setTasks(tasks));
  yield put(actions.setLoading(false));
};

function* tasksComplete() {

  yield put(actions.setLoading(true));

  const tasks: TTask[] = yield call(tasksAPI.completeAll);

  yield put(actions.setTasks(tasks));
  yield put(actions.setLoading(false));
};

function* tasksSaga() {
  yield all([
    takeLatest(TYPES.TASKS_RELOAD, tasksReload),
    takeLatest(TYPES.TASKS_COMPLETE, tasksComplete),
  ]);
}

export {
  tasksSaga
}
