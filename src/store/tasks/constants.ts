const sliceName = 'tasks';
const sagaName = 'tasks/saga';

const TYPES = {
  TASKS_RELOAD: `${sagaName}/tasksReload`,
  TASKS_COMPLETE: `${sagaName}/tasksComplete`,
};

export {
  sliceName,
  sagaName,
  TYPES,
};
