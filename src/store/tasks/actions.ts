import { TYPES } from './constants';
import { slice } from './slice';

const actions = {
  ...slice.actions,
  tasksReload: () => ({
    type: TYPES.TASKS_RELOAD,
  }),
  tasksComplete: () => ({
    type: TYPES.TASKS_COMPLETE,
  }),
};

export {
  actions,
};
